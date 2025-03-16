/* eslint-disable react/prop-types */
import { TiTick } from "react-icons/ti";
export default function Alert({ message }) {
  return (
    <div
      role="alert"
      className="flex items-center justify-center rounded-md border-2 border-black bg-other p-5 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
      <TiTick className="mr-3 h-6 min-h-[24px] w-6 min-w-[24px]" />
      {message}
    </div>
  )
}
