import { RiAngularjsLine, RiReactjsLine } from "react-icons/ri";
import { SiNodedotjs, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";

function Technologies() {
  return (
    <div
    className="pb-24">
        <h2 className="my-20 text-center text-4xl">
Technologies
        </h2>
        <div
        className="flex flex-wrap items-center justify-center gap-4"
        >
    <div className="flex flex-col items-center">
    <RiAngularjsLine className="text-7xl text-red-800" />
    <p className="text-xl font-semibold  ">Angular</p>
  </div>

  {/* React */}
  <div className=" p-4 flex flex-col items-center">
    <RiReactjsLine className="text-7xl text-cyan-400" />
    <p className="text-xl font-semibold  ">React</p>
  </div>

  {/* Node.js */}
  <div className=" p-4 flex flex-col items-center">
    <SiNodedotjs className="text-7xl text-green-600" />
    <p className="text-xl font-semibold  ">Node.js</p>
  </div>

  {/* .NET Core */}
  <div className=" p-4 flex flex-col items-center">
    <SiDotnet className="text-7xl text-purple-700" />
    <p className="text-xl font-semibold  ">.NET Core</p>
  </div>

  {/* MS SQL */}
  <div className="flex flex-col items-center">
    <SiMicrosoftsqlserver className="text-7xl text-orange-600" />
    <p className="text-xl font-semibold  ">MS SQL</p>
  </div>

        </div>
        </div>



   
  )
}

export default Technologies