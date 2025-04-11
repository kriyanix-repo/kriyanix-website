import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Case Studies</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-purple-700 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600">Real-world impact of our AI solutions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="relative h-48 w-full bg-gradient-to-r from-purple-100 to-orange-100 flex items-center justify-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
                                    {study.icon}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                                <p className="text-gray-600 mb-4">{study.description}</p>
                                <div className="flex items-center text-purple-700 font-medium">
                                    <Link href="#" className="inline-flex items-center hover:underline">
                                        Read Case Study
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const caseStudies = [
    {
        title: "AI-Powered Supply Chain Optimization",
        description:
            "How we helped a major manufacturing company reduce operational costs by 25% through intelligent supply chain optimization.",
        icon: "📦",
    },
    {
        title: "Personalized Learning Platform",
        description:
            "Creating an adaptive education platform that personalizes content based on individual student learning patterns.",
        icon: "🎓",
    },
    {
        title: "Smart Agriculture Solutions",
        description:
            "Implementing AI-driven crop monitoring and prediction systems that increased yield by 40% for rural farmers.",
        icon: "🌾",
    },
]
