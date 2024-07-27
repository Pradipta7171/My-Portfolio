"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utills";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateEmailContent(message: string, senderEmail: string) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New message from your portfolio site</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000000; background-color: #f3f4f6; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #1f2937; margin-bottom: 20px; font-size: 24px; font-weight: bold;">You have received the following message from the contact form</h1>
            <p style="margin-bottom: 20px;">${message}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="font-size: 14px;">The sender's email is: <strong style="font-weight: 600;">${senderEmail}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

    let data;
  try {
    const emailHtml = generateEmailContent(message as string, senderEmail as string);

      data = await resend.emails.send({
      from: "Portfolio | Contact Form <onboarding@resend.dev>",
      to: "pradipto9798@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      html: emailHtml,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};