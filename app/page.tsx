import Header from "@/components/header"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import Technology from "@/components/technology"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Mission />
            <Technology />
            <Footer />
        </main>
    )
}
