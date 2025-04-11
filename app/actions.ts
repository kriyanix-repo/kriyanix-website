"use server"

import { createServerSupabaseClient } from "@/lib/supabase-server"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
    const supabase = createServerSupabaseClient()

    try {
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const message = formData.get("message") as string

        if (!name || !email || !message) {
            return {
                success: false,
                error: "Please fill out all fields",
            }
        }

        const { error } = await supabase.from("contacts").insert([{ name, email, message }])

        if (error) {
            return {
                success: false,
                error: error.message,
            }
        }

        revalidatePath("/")
        return {
            success: true,
            message: "Your message has been sent successfully!",
        }
    } catch (error) {
        return {
            success: false,
            error: "An unexpected error occurred",
        }
    }
}
