import { Quote } from "lucide-react"

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What Our Clients Say</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-purple-700 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600">Trusted by innovative companies worldwide</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 text-purple-600">
                                <Quote size={32} />
                            </div>
                            <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                            <div className="flex items-center">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const testimonials = [
    {
        quote:
            "Kriyanix's AI solutions have transformed our customer service operations. The intelligent chatbot they developed has reduced response times by 70% while maintaining high customer satisfaction.",
        name: "Priya Sharma",
        title: "CTO, GlobalTech Solutions",
    },
    {
        quote:
            "The predictive analytics platform developed by Kriyanix has given us unprecedented insights into market trends. We've been able to make data-driven decisions that have increased our revenue by 35%.",
        name: "Rajiv Mehta",
        title: "CEO, InnovateNow",
    },
    {
        quote:
            "Working with Kriyanix has been a game-changer for our healthcare system. Their AI diagnostic tool has improved accuracy rates and allowed our doctors to focus more time on patient care.",
        name: "Dr. Ananya Patel",
        title: "Medical Director, HealthFirst",
    },
]
