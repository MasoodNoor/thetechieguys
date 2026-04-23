import { Hero } from '@/components/sections/Hero'
import { Pricing } from '@/components/sections/Pricing'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <Hero id="home" />
      <WhyChooseUs id="about" />
      <Pricing id="packages" />
      <Testimonials />
      <ContactSection />
    </main>
  )
}
