import { Movie_Image } from "../../assets"
import { Rating } from ".."

export default function index({ movie }) {
  console.log(movie)
  
  const genre="Action, Adventure, Drama"

  return (
    <div className="w-[250px] h-[490px]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt="movie"
      />
      <div className="text-gray-400 font-bold text-xs leading-[15.62px] mt-3">USA, 2016 - Current</div>
      <div className="text-gray-700 font-bold text-lg leading-[23.44px] mt-3 mb-3">Stranger Things</div>
      <Rating
        rating="86.0 / 100"
        like="97%"
        id={1}
      />
      <div className="font-bold text-xs leading-[15.62px] text-gray-400">{genre}</div>
    </div>
  )
}
