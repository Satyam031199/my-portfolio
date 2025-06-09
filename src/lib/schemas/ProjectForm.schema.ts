import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  projectImage: z.instanceof(FileList)
    .refine(file => file?.length === 1, 'Image is required')
    .refine(file => {
      const acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      return acceptedTypes.includes(file?.[0]?.type);
    }, 'Only jpg, jpeg, and png files are allowed'),
  category: z.string().min(3, "Category is required."),
  technologies: z
    .string()
    .transform((val) =>
      val
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0)
    )
    .refine((arr) => arr.length > 0, {
      message: "At least one technology is required",
    }),
  liveUrl: z.string().url("Live URL must be a valid URL."),
  githubUrl: z.string().url("GitHub URL must be a valid URL."),
});
