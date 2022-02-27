import type {NextPage} from 'next'
import Head from 'next/head'
import {useState} from "react";
import NavModal from "../src/components/NavModal";
import Header from "../src/components/Header";
import Portfolio from "./Portfolio";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(prev => !prev)

  return (
    <>
      <Head>
        <title>Arche Information Systems</title>
        <meta name="description" content="Arche Information Systems LLC."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <NavModal open={modalOpen} closeModal={toggleModal}/>
      <main id="portfolio" className={modalOpen ? "no-scroll" : ""}>
        <Header toggleModal={toggleModal} isModalHeader={modalOpen}/>
        <Portfolio/>
        <AboutUs/>
        <Services/>
        <ContactUs/>
      </main>
    </>
  )
}

export default Home
