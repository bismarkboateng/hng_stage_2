import { Navbar, DescriptionBox } from "./components"
import './App.css'
import { Poster } from "./assets"


function App() {

  return (
    <div>
      <img
        src={Poster}
        className="absolute top-0 left-0 z-[-10] h-[600px] w-[1440px]"
      />
      <Navbar />
      <DescriptionBox />
    </div>
  )
}

export default App
