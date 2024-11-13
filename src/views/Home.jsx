import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ShoesList from "../components/ShoesList";
import Buscador from "../components/Buscador";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Buscador />
      <ShoesList>
        <Card />
      </ShoesList>
      <Footer />

    </>
  );
};

export default Home;