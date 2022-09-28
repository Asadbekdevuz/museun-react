import Header from "./components/Header";
import Hero from "./components/Hero";
import Tour from "./components/Tour";

function App() {
  return (
    <>
<Header/>
<main className="site-main">
  <Hero/>
  <Tour/>
</main>
    </>
  );
}

export default App;
