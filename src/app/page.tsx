import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Pricing />
        <Faqs />
      </main>
      <Footer />

    </>
  )
}
