import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TeamInfo from '../components/TeamInfo'
import TournamentRegistration from '../components/TournamentRegistration'
import Schedule from '../components/Schedule'
import Resources from '../components/Resources'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TeamInfo />
      <TournamentRegistration />
      <Schedule />
      <Resources />
      <Contact />
      <Footer />
    </>
  )
}