import { Navbar } from '@/components/navbar'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { WhyBeduraSection } from '@/components/sections/why-bedura'
import { BeduraPromiseSection } from '@/components/sections/bedura-promise'
import { MattressCollectionSection } from '@/components/sections/mattress-collection'
import { FindPerfectMattressSection } from '@/components/sections/find-perfect-mattress'
import { MattressTechnologySection } from '@/components/sections/mattress-technology'
import { SleepEssentialsSection } from '@/components/sections/sleep-essentials'
import { ExperienceCenterSection } from '@/components/sections/experience-center'
import { ShowroomExperienceSection } from '@/components/sections/showroom-experience'
import { AboutBeduraSection } from '@/components/sections/about-bedura'
import { StatisticsSection } from '@/components/sections/statistics'
import { ReviewsCarouselSection } from '@/components/sections/reviews-carousel'
import { ReadyForBetterSleepSection } from '@/components/sections/ready-for-better-sleep'
import { ContactSection } from '@/components/sections/contact-section'
import { GoogleMapsSection } from '@/components/sections/google-maps'
import { FAQSection } from '@/components/sections/faq'

export default function Page() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main id="main-content" className="min-h-screen w-full bg-background">
        <HeroSection />
        <WhyBeduraSection />
        <BeduraPromiseSection />
        <MattressCollectionSection />
        <FindPerfectMattressSection />
        <MattressTechnologySection />
        <SleepEssentialsSection />
        <ExperienceCenterSection />
        <ShowroomExperienceSection />
        <AboutBeduraSection />
        <StatisticsSection />
        <ReviewsCarouselSection />
        <ReadyForBetterSleepSection />
        <ContactSection />
        <GoogleMapsSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  )
}