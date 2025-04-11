import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const imagePath = searchParams.get("path")

    if (!imagePath) {
        return NextResponse.json({ error: "No image path provided" }, { status: 400 })
    }

    const fullPath = path.join(process.cwd(), "public", imagePath)

    try {
        const exists = fs.existsSync(fullPath)
        const stats = exists ? fs.statSync(fullPath) : null

        return NextResponse.json({
            exists,
            path: fullPath,
            size: stats ? stats.size : null,
            isFile: stats ? stats.isFile() : null,
        })
    } catch (error) {
        return NextResponse.json({ error: "Error checking file", details: error }, { status: 500 })
    }
}
