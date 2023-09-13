import { ChevronRight } from "../../assets"
import { MovieCard } from ".."

export default function index() {
  return (
    <section className="w-10/12 mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-4xl leading-[46.87px]">Featured Movie</div>
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <span className="font-normal text-lg leading-6 text-rose-700">See more</span>
          <img src={ChevronRight} alt="right arrow" className="w-[12px] h-[12px]"/>
        </div>
      </div>

      <div className="mt-[40px] flex flex-wrap gap-[80px] border-2 border-red-500">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>  
  )
}
