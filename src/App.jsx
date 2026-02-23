import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import Card from "./components/Card.jsx";

function App () {
  return (
    <div>
    <Header/>
    <main>
      <h2>Welcome to my website!</h2>
      <Food />
      <br></br>
      <Card
          emoji="👤"
          title="About Me"
          description="I am a 12th grader who loves boba"
          extra="Fun Fact: I love daniel caesar"
        />

        <Card
          emoji="🙌"
          title="Favorite Hobby"
          description="Volunteering"
          extra="I like helping my"
        />

        <Card
          emoji="🥟"
          title="Dream Job"
          description="Food Critic"
          extra="I like eating"
        />    </main>
    <Footer />
  </div>
  );
}
export default App;