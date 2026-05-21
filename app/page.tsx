import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Pricing } from '@/components/sections/Pricing'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <Hero id="home" />
      <WhyChooseUs id="about" />
      <Services />
      <Pricing id="packages" />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  )
}
