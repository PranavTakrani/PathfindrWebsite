import Hero from '@/components/sections/Hero'
import TrustLogos from '@/components/sections/TrustLogos'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import Resources from '@/components/sections/Resources'
import About from '@/components/sections/About'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Resources />
      <About />
    </>
  )
}