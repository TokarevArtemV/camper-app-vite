import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Icons from '../Icons/Icons';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__box_img">
                <img
                  className="embla__slide__img"
                  src={src}
                  alt={`Slide ${index}`}
                  onClick={() => openModal(src)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image modal"
        className="modal"
        overlayClassName="modal__overlay"
      >
        <button
          onClick={closeModal}
          type="button"
          className="modal__close_button"
          aria-label="Close"
        >
          <Icons id={'icon-cross'} size="32" />
        </button>
        <img src={modalImage} className="modal__image" alt="full screen" />
      </Modal>
    </section>
  );
};

export default EmblaCarousel;
