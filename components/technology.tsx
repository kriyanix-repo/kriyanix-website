import Image from "next/image"

export default function Technology() {
    return (
        <section id="technology" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Technology</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-purple-700 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600">Cutting-edge AI solutions with a human touch</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Solutions for Complex Problems</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Our AI-powered platforms combine machine learning, natural language processing, and computer vision to
                            create solutions that understand, adapt, and evolve.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg
                                        className="h-4 w-4 text-green-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-gray-600">Advanced machine learning algorithms</p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg
                                        className="h-4 w-4 text-green-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-gray-600">Natural language understanding and generation</p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg
                                        className="h-4 w-4 text-green-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-gray-600">Computer vision and image recognition</p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg
                                        className="h-4 w-4 text-green-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-gray-600">Predictive analytics and forecasting</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md h-80 sm:h-96">
                            <Image
                                src="/indotech-weave.png"
                                alt="AI Technology Illustration"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
