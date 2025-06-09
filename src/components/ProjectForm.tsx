"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { projectSchema } from "@/lib/schemas/ProjectForm.schema";
import { addProject, uploadImageToSupbaseBucket } from "@/lib/actions/projects.actions";

type ProjectFormData = z.infer<typeof projectSchema>;

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
  } = useForm<ProjectFormData>({
    //@ts-ignore
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    const imageFile = data.projectImage?.[0];
    console.log(imageFile);
    if (!imageFile) {
      toast.error("Please select an image file to upload.");
      return;
    }
    try {
      const imageUrl = await uploadImageToSupbaseBucket(imageFile);
      const project = await addProject(data, imageUrl);
      console.log(project);
      toast.success("Project submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to add project. Please try again.");
      console.log("Failed to add project: ", error);
    }
  };

  return (
    <section className="mt-[60px] py-20 px-6 bg-white dark:from-gray-900 dark:to-gray-800 max-w-4xl mx-auto rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
        Add New Project
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title")}
            placeholder="e.g. My Portfolio Site"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Describe your project..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="projectImage">
            Project Image (JPG, JPEG, PNG only)
          </Label>
          <Input
            id="projectImage"
            {...register("projectImage")}
            placeholder="https://example.com/image.png"
            type="file"
            accept=".jpg,.jpeg,.png"
            className="cursor-pointer"
          />
          {errors.projectImage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectImage.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            {...register("category")}
            placeholder="e.g. Web App"
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="technologies">Technologies (comma separated)</Label>
          <Input
            id="technologies"
            {...register("technologies")}
            placeholder="React, TypeScript, Tailwind"
          />
          {errors.technologies && (
            <p className="text-red-500 text-sm mt-1">
              {errors.technologies.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="liveUrl">Live URL</Label>
          <Input
            id="liveUrl"
            {...register("liveUrl")}
            placeholder="https://yourproject.com"
          />
          {errors.liveUrl && (
            <p className="text-red-500 text-sm mt-1">
              {errors.liveUrl.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input
            id="githubUrl"
            {...register("githubUrl")}
            placeholder="https://github.com/yourproject"
          />
          {errors.githubUrl && (
            <p className="text-red-500 text-sm mt-1">
              {errors.githubUrl.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Project"}
        </Button>
      </form>
    </section>
  );
};

export default ProjectForm;
