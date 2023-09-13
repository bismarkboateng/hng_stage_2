import { imdb, Tomato, playIcon } from "../../assets"

export default function index() {
  return (
    <section className="ml-[8.5%] mt-[120px]">
        <div className="font-bold text-5xl leading-[56px] text-white mb-4">John Wick 3 : <br />Parabellum</div>
        
        <div className="flex flex-row gap-10 items-center mb-4">
            <div className="flex flex-row gap-3 items-center">
                <img src={imdb} alt="imdb" />
                <div className="font-normal text-xs leading-3 text-white">86.0 / 100</div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <img src={Tomato} alt="tomato" />
                <div className="font-normal text-xs leading-3 text-white">97%</div>
            </div>
        </div>

        <p className="text-left text-white font-medium text-sm leading-[18px] w-[302px] h-[72px] mb-4">
            John Wick is on the run after killing a member
            of the international assassins' guild, and with
            a $14 million price tag on his head, he is the
            target of hit men and women everywhere.
        </p>

        <button className="flex flex-row items-center gap-3 bg-rose-700 py-[6px] px-[16px]
        rounded-md">
            <img src={playIcon} alt="play" />
            <span className="font-bold text-sm leading-[24px] text-white">WATCH TRAILER</span>
        </button>

    </section>
  )
}
