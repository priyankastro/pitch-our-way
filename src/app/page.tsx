import Navbar from './navbar'
import Hero from './hero'
import About from './about'
import Services from './services'
import Blog from './blog'
import Contact from './contact'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <section id='home'><Hero /></section>
      <section id='about-us'><About /></section>
      <section id='services'><Services /></section>
      <section id='blogs'><Blog /></section>
      <section id='contact-us'><Contact /></section>
      <Footer />
    </>
  )
}
