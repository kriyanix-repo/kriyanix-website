import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPreview() {
    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Latest Insights</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-purple-700 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600">Thoughts and perspectives on AI and innovation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="h-48 w-full bg-gradient-to-r from-purple-100 to-orange-100 flex items-center justify-center">
                                <div className="text-4xl">{post.emoji}</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{post.date}</span>
                                    <User size={16} className="ml-4 mr-2" />
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="flex items-center text-purple-700 font-medium">
                                    <Link href="#" className="inline-flex items-center hover:underline">
                                        Read More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="#"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-700 to-orange-600 hover:from-purple-800 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        View All Articles
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

const blogPosts = [
    {
        title: "The Future of AI in Healthcare: Transforming Patient Care",
        excerpt:
            "Exploring how artificial intelligence is revolutionizing diagnostics, treatment plans, and patient monitoring systems.",
        date: "April 10, 2025",
        author: "Dr. Meera Patel",
        emoji: "🏥",
    },
    {
        title: "Blending Ancient Wisdom with Modern AI: A New Paradigm",
        excerpt:
            "How traditional problem-solving methodologies from Indian philosophy can enhance modern artificial intelligence systems.",
        date: "April 5, 2025",
        author: "Arjun Kapoor",
        emoji: "🧠",
    },
    {
        title: "Ethical AI Development: Ensuring Responsible Innovation",
        excerpt:
            "Guidelines and frameworks for developing AI systems that are fair, transparent, and beneficial for all of humanity.",
        date: "March 28, 2025",
        author: "Leela Krishnan",
        emoji: "⚖️",
    },
]
