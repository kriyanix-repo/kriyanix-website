"use client"

import { useState, useEffect } from "react"

export default function ImageDebug() {
    const [imageStatus, setImageStatus] = useState<Record<string, any>>({})
    const [serverStatus, setServerStatus] = useState<Record<string, any>>({})
    const imagesToCheck = ["/AI-India-Fusion.png", "/vibrant-indian-kaleidoscope.png", "/test-image.svg"]

    useEffect(() => {
        // Check in browser
        const checkImage = (src: string) => {
            const img = new Image()
            img.onload = () => setImageStatus((prev) => ({ ...prev, [src]: "loaded" }))
            img.onerror = () => setImageStatus((prev) => ({ ...prev, [src]: "error" }))
            img.src = src
        }

        // Check on server
        const checkServerImage = async (src: string) => {
            try {
                const response = await fetch(
                    `/api/check-image?path=${encodeURIComponent(src.startsWith("/") ? src.slice(1) : src)}`,
                )
                const data = await response.json()
                setServerStatus((prev) => ({ ...prev, [src]: data }))
            } catch (error) {
                setServerStatus((prev) => ({ ...prev, [src]: { error: String(error) } }))
            }
        }

        imagesToCheck.forEach(checkImage)
        imagesToCheck.forEach(checkServerImage)
    }, [])

    return (
        <div className="fixed bottom-0 right-0 bg-white p-4 border shadow-lg z-50 text-xs max-w-md overflow-auto max-h-60">
            <h3 className="font-bold mb-2">Image Debug</h3>
            <ul>
                {imagesToCheck.map((src) => (
                    <li key={src} className="mb-2">
                        <div>
                            <strong>{src}</strong>: {imageStatus[src] || "checking..."}
                        </div>
                        <div className="pl-2 text-gray-600">
                            Server: {serverStatus[src] ? JSON.stringify(serverStatus[src], null, 2) : "checking..."}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
