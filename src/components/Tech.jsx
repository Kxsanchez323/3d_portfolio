import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology) => (
      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" key={technology.name}>
        <div className="w-20 h-20 rounded-full bg-teritary flex items-center justify-center transform hover:rotate-12 transition-all duration-300">
          <img className="w-16 h-16" src={technology.icon} alt={technology.name} />
        </div>
      </div>
    ))}
  </div>
  )
}

export default SectionWrapper(Tech, "")