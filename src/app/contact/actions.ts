"use server";

import { z } from "zod";
import sgMail from "@sendgrid/mail";

// Ensure you've set SENDGRID_API_KEY in your .env file
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

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

    // Prepare the email message
    const msg = {
      to: "hello@harrynortham.com", // Your recipient email
      from: "hello@harrynortham.com", // Verified sender email in SendGrid
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <strong>New Contact Form Submission</strong><br>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    };

    // Send the email
    await sgMail.send(msg);

    return { success: true, message: "Email sent successfully" };
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
      error: "Failed to send email",
    };
  }
}
