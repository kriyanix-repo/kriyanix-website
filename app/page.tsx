import Header from "@/components/header"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import Technology from "@/components/technology"
import Testimonials from "@/components/testimonials"
import CaseStudies from "@/components/case-studies"
import Team from "@/components/team"
import BlogPreview from "@/components/blog-preview"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Mission />
            <Technology />
            <Testimonials />
            <CaseStudies />
            <Team />
            <BlogPreview />
            <Footer />
        </main>
    )
}
