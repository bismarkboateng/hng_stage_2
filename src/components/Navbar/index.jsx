import { Tv, Menu } from "../../assets"
import { useState } from "react"
import { Search } from ".."

export default function index() {
  const [searchTerm, setSearchTerm] = useState("")

//   console.log(searchTerm)

  return (
    <nav 
        className="w-10/12 mx-auto mt-5
        flex flex-row items-center"
    >
        <div className="flex flex-row items-center gap-6 mr-auto">
            <img src={Tv} alt="tv"/>
            <div className="text-white font-bold text-2xl leading-6">MovieBox</div>
        </div>
        <Search 
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
        />

        <div className="flex flex-row gap-5">
            <div className="text-base text-white leading-6">Sign in</div>
            <img src={Menu} alt="menu" className="bg-red-600 border-50 rounded-full w-[24px] h-[24px]"/>
        </div>
    </nav>
  )
}
