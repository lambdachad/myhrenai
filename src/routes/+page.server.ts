import { fail } from "@sveltejs/kit";
import { Resend } from "resend";
import { env } from "$env/dynamic/private";
import type { Actions } from "./$types";

export const actions = {
    contact: async ({ request }) => {
        const resend = new Resend(env.RESEND_API_KEY);
        // Get form data and check if valid
        const formData = await request.formData();
        const { firstName, lastName, email, company, message } =
            Object.fromEntries(formData) as {
                firstName: string;
                lastName: string;
                email: string;
                company: string;
                message: string;
            };
        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !email.trim() ||
            !company.trim()
        ) {
            return fail(400, { error: "Please fill in all required fields." });
        }

        // Send email to Myhren AI
        await resend.emails.send({
            from: "Myhren AI <noreply@myhren.ai>",
            to: "oddharald@myhren.ai",
            replyTo: email,
            subject: `New inquiry from ${firstName} ${lastName} at ${company}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\n\n${message.trim()}`,
        });

        // Send email to the user
        await resend.emails.send({
            from: "Myhren AI <contact@myhren.ai>",
            to: email,
            subject: "We got your message",
            text: `Hi ${firstName},\n\nThanks for reaching out. We received your message and will get back to you within a few hours.\n\nIf you want to skip the back-and-forth, you can book a call directly:\nhttps://cal.com/myhrenai/strategy-call\n\nTalk soon,\nOdd-Harald Myhren\nMyhren AI`,
        });
        return { success: true };
    },
} satisfies Actions;
