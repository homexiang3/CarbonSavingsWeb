import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';

const Index = () => {
  return (
    <Layout pageTitle="CarbonSavings">
      <Header />
      <Hero />
      <Service />
      <Feature/>
      <Team />
      <Calculator />
      <Footer />
    </Layout>
  )
}

export default Index;