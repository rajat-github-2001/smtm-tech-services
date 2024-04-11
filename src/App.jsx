import Nav from "./components/Nav";
import './App.css';
import { Hero, Clients, OurServices, OurProcess, TechStacks, Footer, Work } from "./sections"

function App() {

  return (
    <>
      <main className="relative overflow-hidden">
        <section className="m-6">
          <Nav />

          <section>
            <Hero />
          </section>
          <section className="mt-12 ">
            <Clients />
          </section>

          <section className="mt-16">
            <OurServices />
          </section>
        </section>

        <section className="mt-16">
          <Work />
        </section>

        <section className="m-6">
          <section className="mt-16">
            <OurProcess />
          </section>

          <section className="mt-16">
            <TechStacks />
          </section>
        </section>

        <section className="mt-16">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
