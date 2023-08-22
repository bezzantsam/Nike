import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
import {statistics}from "../constants"
import {bigShoe1} from "../assets/images"
const Hero = () => {
  return (
    <section 
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className= "text-x1 font-montserrat text-coral-red"> Our summer collection</p>
        <h1 className="mt-10 font-palanquin t-8xl max-sm:text-[72px] max-sm:leading[82] font-bold ">
          <span className="xl bg-white xl:whitespace-nowrap relative z-10 pr-10">The new arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes
        
          </h1>
          <p className="font-monserrat t text-slate-gray  text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active lifestyle.</p>
          <Button  label="shop now" iconURL={arrowRight}/>
          <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'></div>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold"> {stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
      </div>
      <div>
        <img
        src="bigShoeImage"/>
      </div>
    </section>
  )
}

export default Hero