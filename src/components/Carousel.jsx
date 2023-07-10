import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './CarouselThumbnailBtn';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = ({
  options,
  pluginOptions,
  images,
  thumbnails=false,
  className="default"
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [
    Autoplay(pluginOptions)
  ])
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {
            images.map(({name, path}, index) => (
            <div
              className={
                className === "default" 
                ? "embla__slide" 
                : className
              }
              key={index}
            >
              <img
                loading="lazy"
                className={
                  className === "default" 
                  ? "embla__slide__img"
                  : null
                }
                src={path}
                alt={name}
              />
              {thumbnails
              ? <p className='photo_description'>{name}</p>
              : <></>
              }
            </div>
            ))
          }
        </div>
      </div>
      {
        (thumbnails)
        ? <>
          <div className="embla-thumbs">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {images.map(({name, path}, index) => (
                  <Thumb
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    imgSrc={path}
                    key={index}
                    alt={name}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
        : <></>
      }
    </div>
    )
}

export default EmblaCarousel;
