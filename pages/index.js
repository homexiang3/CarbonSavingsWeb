import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Challenge from '../components/Challenge';
import Feature from '../components/Feature';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';

const Index = () => {
  return (
    <Layout pageTitle="CarbonSavings">
      <Header />
      <Hero />
      <Feature />
      <Calculator />
      <Team />
      <Challenge/>
      <Footer />
    </Layout>
  )
}

export default Index;