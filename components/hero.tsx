import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32">
            <div className="absolute inset-0 bg-[url('/kaleidoscope-india.png')] bg-center opacity-5"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                        <span className="block">Igniting Innovation with</span>
                        <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
                            Wisdom and AI Power
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Blending ancient wisdom with cutting-edge AI technology to create solutions that transform businesses and
                        empower communities globally.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-700 to-orange-600 hover:from-purple-800 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>
    )
}
