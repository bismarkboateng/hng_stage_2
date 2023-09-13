import { Navbar, DescriptionBox, MovieList, MovieDetail} from "./components"
import './App.css'
import { Poster } from "./assets"
import { Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/movie/:movieId" element={<MovieDetail /> } />
      </Routes>
      <div>
        <img
          src={Poster}
          className="absolute top-0 left-0 z-[-10] h-[600px] w-[1440px]"
        />
        <Navbar />
        <DescriptionBox />
        
        <main className="mt-[15%]">
          <MovieList />
        </main>
      </div>
    </>
  )
}

export default App
