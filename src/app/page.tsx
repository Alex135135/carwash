'use client'
import { WhyUs } from '../components/WhyUs/WhyUs'
import { Welcome } from '../components/Welcome/Welcome'
import { SpecialOffer } from '../components/SpecialOffer/SpecialOffer'
import { cardInfoWhyUs } from "../data/data"
import { Footer } from '../components/Footer/Footer'
//export default function Home() {

export default function Home() {
  return (
    <div>
      <Welcome />
      <WhyUs
        title={'Почему выбирают нас?'}
        texts={cardInfoWhyUs}
      />
      <SpecialOffer />
      <Footer />

    </div>
  )
}