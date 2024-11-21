import Navbar from "./componnets/Navbar"
import Hero from "./componnets/Hero"
import Technologies from "./componnets/Technologies"
import Experience from "./componnets/Experience"
import Contact from "./componnets/Contact"
import Education from "./componnets/Education"


import Projects from "./componnets/Projects"



function App() {
  return (
 <div className="overflow-x-hidden text-stone-300 antialiased">

  <div className="fixed inset-0 -z-10">
  <div className="relative h-full w-full bg-neutral-900">
  <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div></div>

  </div>
<div className="container mx-auto px-8">


  <Navbar/>
  <Hero />

  <Technologies/>
{/*   <Projects /> */}

  <Experience />
  <Education />
  <Contact />
</div>

 </div>
  )
}

export default App
