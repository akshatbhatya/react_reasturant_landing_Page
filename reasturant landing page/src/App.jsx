import './App.css'
import { Footer, Header, Navbar } from './Components'
import { Chef, FindUs, Gallery, Intro, Laurels, SpecialMenu, AboutUs } from './Container'

function App() {


  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  )
}

export default App
