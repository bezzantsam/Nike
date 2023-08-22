import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
const Hero = () => {
  return (
    <section 
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p> Our summer collection</p>
        <h1>
          <span>The new arrival</span>
          <br />
          <span> Nike </span>
          Shoes
          </h1>
          <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active lifestyle.</p>
          <Button  label="shop now" iconURL={arrowRight}/>
          <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'></div>
          
      </div>
    </section>
  )
}

export default Hero