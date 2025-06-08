import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import PropType from './EmblaCarousel.props';
import Image from 'next/image';
import './embla.css';
import {DotButton, useDotButton} from './EmblaCarouselDotButton';

const EmblaCarousel: React.FC<PropType> = props => {
  const {slides, options, className, imageClassname, hasDots = false, screenTime = 4000} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({delay: screenTime})]);

  const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi);

  return (
    <section className={`embla  ${className}`}>
      <div className='embla__viewport max-h-full h-full' ref={emblaRef}>
        <div className='embla__container h-full max-h-full'>
          {slides.map((item, index) => (
            <div className='embla__slide h-full max-h-full' key={index}>
              {typeof item === 'string' ? (
                <Image
                  src={item}
                  alt={'slide photo'}
                  width={800}
                  height={800}
                  className={`object-center object-cover ${imageClassname}`}
                />
              ) : (
                item
              )}
            </div>
          ))}
        </div>
      </div>
      {hasDots && (
        <div className='embla__controls'>
          <div className='embla__dots'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : '',
                )}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
