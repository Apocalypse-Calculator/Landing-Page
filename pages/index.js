import Head from 'next/head';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Header from '../components/header';
import About from '../components/about';
import HowToUse from '../components/howToUse';
import Download from '../components/download';
import OurTeam from '../components/ourTeam';
import ContactUs from '../components/contactUs';
import Footer from '../components/footer';

const Home = () => (
  <Page>
    <Head>
      <title>Get ReStock!</title>
      <meta name='description' content='Sample description' />
      <meta property='og:title' content='Get Restock!' />
      <meta property='og:description' content='Sample description' />
      <meta property='og:image' content='/logo.png' />
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"/>
    </Head>

    <Header />
    <About />
    <HowToUse />
    <Download />
    <OurTeam />
    <ContactUs />
    <Footer />
  </Page>
);

export default Home;

const Page = styled.main`
  ${up('tablet')} {
    {/* h1: 1em; */}
    font-size: 1em;
  }

  ${up('desktop')} {
    {/* h1: 1em; */}
    font-size: 1em;
  }
`;
