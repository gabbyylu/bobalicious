import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import Card from "./components/Card.jsx";
import LikeButton from "./components/LikeButton.jsx";

function App () {
  return (
    <div>
    <Header/>
    <main>


        <Card
          name = "👤 Gabby"
          title="Designer"
          blurb ="Loves making things look good"
          github="https://github.com/gabbyylu/bobalicious"
          skills="CSS, Tailwind, Javascript"
          gif1="https://media.tenor.com/9EWwYOJnM_oAAAAM/cute-cats.gif"

                  /> 
                  <LikeButton/>
                     </main>
      <br></br>

    <Footer />
    <h1 className="text-4xl font-bold text-blue-600 bg-yellow-100 p-8 rounded-xl">
  Tailwind is working!
</h1>

  </div>
  );
}
export default App;