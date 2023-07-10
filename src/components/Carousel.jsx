import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './CarouselThumbnailBtn';
import { imageByIndex } from '../utils/utils'

const EmblaCarousel = ({ options, images, thumbnails=false, className="default" }) => {
  const slides = Array.from(images.keys());
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
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
            slides.map((index) => (
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
                src={imageByIndex(index, images)}
                alt="Your alt text"
              />
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
                {slides.map((index) => (
                  <Thumb
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    imgSrc={imageByIndex(index, images)}
                    key={index}
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
