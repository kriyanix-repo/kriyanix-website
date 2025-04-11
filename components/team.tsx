import { Linkedin, Twitter, Mail } from "lucide-react"

export default function Team() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Leadership Team</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-purple-700 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600">Visionaries blending tradition with technology</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="h-64 w-full bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center">
                                <span className="text-6xl font-bold text-white">{member.name.charAt(0)}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-purple-700 mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                <div className="flex space-x-3">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-purple-700 transition-colors"
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-purple-700 transition-colors"
                                        aria-label={`${member.name}'s Twitter`}
                                    >
                                        <Twitter size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-purple-700 transition-colors"
                                        aria-label={`Email ${member.name}`}
                                    >
                                        <Mail size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const teamMembers = [
    {
        name: "Arjun Kapoor",
        role: "Founder & CEO",
        bio: "Former AI researcher at MIT with 15+ years of experience in machine learning and artificial intelligence.",
    },
    {
        name: "Meera Patel",
        role: "Chief Technology Officer",
        bio: "AI pioneer with background in developing neural networks and natural language processing systems.",
    },
    {
        name: "Vikram Singh",
        role: "Chief Data Scientist",
        bio: "PhD in Computer Science specializing in deep learning algorithms and predictive analytics.",
    },
    {
        name: "Leela Krishnan",
        role: "Head of Innovation",
        bio: "Combines traditional problem-solving methodologies with cutting-edge AI research.",
    },
]
