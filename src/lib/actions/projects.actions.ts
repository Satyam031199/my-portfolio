import { projectSchema } from "../schemas/ProjectForm.schema";
import createSupabaseClient from "../supabase";
import { z } from "zod";

type ProjectFormData = z.infer<typeof projectSchema>;

export const getAllProjects = async () => {
  const supabase = createSupabaseClient;
  const { data, error } = await supabase.from("projects").select().order('id', { ascending: false });
  console.log(data);
  if (error) throw new Error(error?.message);
  return data;
};

export const addProject = async (
  formData: ProjectFormData,
  imageUrl: string
) => {
  const supabase = createSupabaseClient;
  const { data, error } = await supabase
    .from("projects")
    .insert({
      title: formData.title,
      description: formData.description,
      imageurl: imageUrl,
      category: formData.category,
      technologies: formData.technologies,
      liveurl: formData.liveUrl,
      githuburl: formData.githubUrl,
    })
    .select();
  if (error) throw new Error(error?.message || "Failed to add project");
  return data[0];
};

export const uploadImageToSupbaseBucket = async (file: File) => {
  const supabase = createSupabaseClient;
  const filePath = `uploads/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from(import.meta.env.VITE_SUPABASE_BUCKET!)
    .upload(filePath, file, {
      contentType: file.type,
      upsert: true,
    });
  if (error) throw new Error(error?.message || "Upload image to bucket error");
  const { data: publicUrlData } = supabase.storage
    .from(import.meta.env.VITE_SUPABASE_BUCKET!)
    .getPublicUrl(filePath);
  console.log("Uploaded Image URL:", publicUrlData.publicUrl);
  return publicUrlData.publicUrl;
};
