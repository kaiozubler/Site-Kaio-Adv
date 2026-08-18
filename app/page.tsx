import { Divider } from '@/components/divider'
import { FloatingContactButton } from '@/components/floating-contact-button'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { AudienceSection } from '@/components/sections/audience-section'
import { SituationsSection } from '@/components/sections/situations-section'
import { PositioningSection } from '@/components/sections/positioning-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { SiteFooter } from '@/components/sections/site-footer'

export default function Page() {
  return (
    <main id="topo" className="relative">
      <HeroSection />
      <Divider />
      <AudienceSection />
      <Divider />
      <SituationsSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <PositioningSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ContactSection />
      <SiteFooter />
      <FloatingContactButton />
    </main>
  )
}
