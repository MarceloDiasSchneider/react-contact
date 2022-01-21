import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import beagle from "./img/beagle.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <div className="contacts">
        <Contact
          img={beagle}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={beagle}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img={beagle}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img={beagle}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </div>
  );
}

export default App;
