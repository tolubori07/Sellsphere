import { useAtom } from "jotai"
import { darkMode } from "../Auth/Atoms"
export default function ToggleSwitch() {
  const [darkmode, setDarkmode] = useAtom(darkMode);
  return (
    <label className="relative inline-flex cursor-pointer items-center sm:hidden md:inline-flex lg:inline-flex xl:inline-flex">
      <input type="checkbox" value="" className="peer sr-only" onClick={() => setDarkmode(!darkmode)} defaultChecked={darkmode}/>
      <div className="peer h-8 w-[70px] rounded-full border-2 border-black bg-white after:absolute after:start-[6px] after:top-[6px] after:h-5 after:w-5 after:rounded-full after:border-2 after:border-black after:bg-white after:transition-all after:content-[''] peer-checked:bg-main peer-checked:after:translate-x-[37px] peer-focus:outline-none rtl:peer-checked:after:-translate-x-[37px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "></div>
      <h3 className="pl-3">{darkmode?"dark-mode":"Light-mode"}</h3>
    </label>
  )
}
