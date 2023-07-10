export const Thumb = ({ selected, imgSrc, onClick, alt }) => {  
    return (
      <div
        className={'embla-thumbs__slide'.concat(
          selected ? ' embla-thumbs__slide--selected' : ''
        )}
      >
        <button
          onClick={onClick}
          className="embla-thumbs__slide__button"
          type="button"
        >
          <img
            loading="lazy"
            className="embla-thumbs__slide__img"
            src={imgSrc}
            alt={alt}
          />
        </button>
      </div>
    )
  }
  