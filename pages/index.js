import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Challenge from '../components/Challenge';
import Feature from '../components/Feature';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';

/* eslint react/no-string-refs: 0 */

const Index = () => {
  return (
    <Layout pageTitle="CarbonSavings">
      <Header />
      <Hero />
      <Feature />
      <Challenge/>
      <Calculator />
      <Team />
      <Footer />
    </Layout>
  )
}

export default Index;