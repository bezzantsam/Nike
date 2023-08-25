import {arrowRight} from '../assets/icons' 
import {offer} from '../assets/images'
import Button from '../components/Button'
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img  src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          <span className='text-coral-red'> Special </span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Step into a realm of unparalleled innovation and timeless style with our Exclusive Offer collection. This handpicked selection embodies a blend of iconic design and modern performance, representing both our legacy and our future aspirations. From revolutionary athletic designs to classic silhouettes, this collection has it all.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          But its not just about aesthetic appeal. Each shoe is engineered with cutting-edge technology to provide an edge, whether on the track, the court, or the streets. Dive into this curated range and discover unmatched excellence at a special rate, available for a limited time. With each step, experience the essence of true greatness.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;