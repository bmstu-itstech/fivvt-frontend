import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import PropType from './EmblaCarousel.props';
import Image from 'next/image';
import './embla.css';

const EmblaCarousel: React.FC<PropType> = props => {
  const {slides, options, className, imageClassname} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className={`embla  ${className}`}>
      <div className='embla__viewport max-h-full h-full' ref={emblaRef}>
        <div className='embla__container h-full max-h-full'>
          {slides.map((item, index) => (
            <div className='embla__slide h-full max-h-full' key={index}>
              <Image
                src={item}
                alt={'slide photo'}
                width={800}
                height={800}
                className={`object-center object-cover ${imageClassname}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
