import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message is required")
});