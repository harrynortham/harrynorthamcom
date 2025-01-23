"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(30, {
    message: "Message must be at least 30 characters.",
  }),
});

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  try {
    // Validate the data again on the server side
    const validatedData = formSchema.parse(data);

    // TODO: Add your actual form submission logic here
    // For example, send an email, save to database, etc.
    console.log("Validated form data:", validatedData);

    // Simulate an async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data",
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
