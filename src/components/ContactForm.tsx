import { contactFormSchema } from "@/lib/schemas/ContactForm.schema";
import { Send } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type FormData = z.infer<typeof contactFormSchema>;

const postContactForm = async (data: FormData) => {
  const response = await fetch(import.meta.env.VITE_AWS_LAMBDA_MAIL_TRIGGER!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to send message");
  return response.json();
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(contactFormSchema) });
  const mutation = useMutation({
    mutationFn: postContactForm,
    onSuccess: () => {
      toast.success("Email sent successfully!!");
      reset();
    },
    onError: (error) => {
      toast.error("Failed to send message. Please try again.");
      console.log(error?.message);
    },
  });
  const onSubmit: SubmitHandler<FormData> = async (data) =>
    mutation.mutate(data);
  return (
    <div
      className="backdrop-blur-sm bg-white/30 p-10 rounded-3xl border border-white/20 shadow-2xl animate-fade-in"
      style={{ animationDelay: "800ms" }}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Send a Message
        </h3>
        <p className="text-gray-600">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-3 group-focus-within:text-blue-600 transition-colors"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("fullName")}
            className="w-full px-6 py-4 bg-white/60 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/80 transition-all duration-300 text-gray-800 placeholder-gray-500"
            placeholder="Enter your full name"
          />
        </div>
        {errors.fullName && (
          <div className="text-red-700">{errors.fullName.message}</div>
        )}
        <div className="group">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-3 group-focus-within:text-blue-600 transition-colors"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-6 py-4 bg-white/60 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/80 transition-all duration-300 text-gray-800 placeholder-gray-500"
            placeholder="Enter your email address"
          />
        </div>
        {errors.email && (
          <div className="text-red-700">{errors.email.message}</div>
        )}

        <div className="group">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-3 group-focus-within:text-blue-600 transition-colors"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            className="w-full px-6 py-4 bg-white/60 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/80 transition-all duration-300 resize-none text-gray-800 placeholder-gray-500"
            placeholder="Tell me about your project or idea..."
          ></textarea>
        </div>
        {errors.message && (
          <div className="text-red-700">{errors.message.message}</div>
        )}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group"
        >
          {mutation.isPending ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
