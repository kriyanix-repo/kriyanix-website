"use client"

import { useState } from "react"
import { submitContactForm } from "@/app/actions"

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState<{
        success?: boolean
        message?: string
        error?: string
    }>({})

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)

        try {
            const result = await submitContactForm(formData)
            setFormStatus(result)
        } catch (error) {
            setFormStatus({
                success: false,
                error: "An unexpected error occurred",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

            <form action={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 bg-gradient-to-r from-purple-700 to-orange-600 text-white font-medium rounded-md hover:from-purple-800 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>

            {formStatus.success && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">{formStatus.message}</div>
            )}

            {formStatus.error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{formStatus.error}</div>}
        </div>
    )
}
