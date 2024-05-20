import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, deleteFavoriteCar } from '../../redux/carsSlice';
import { selectAllCars, selectFavoriteCars } from '../../redux/selector';
import { Button, CarFeaturesList, Icons, Modal, CarModal, Reviews } from '../';
import s from './CarItem.module.css';

const CarItem = ({ carDatails } = {}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const cars = useSelector(selectAllCars);
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();
  const refFavButton = useRef();

  useEffect(() => {
    if (isFavorite(carDatails._id))
      refFavButton.current.classList.add(`activeButton`);
  }, [favoriteCars]);

  const isFavorite = (id) => favoriteCars.some((car) => car._id === id);

  const handleCloseModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const handleFavorite = (id) => {
    const car = cars.find((car) => car._id === id);

    !isFavorite(id)
      ? dispatch(addFavoriteCar(car))
      : dispatch(deleteFavoriteCar(id));

    refFavButton.current.classList.toggle(`activeButton`);
  };

  const { _id, gallery, name, price, rating, reviews, location, description } =
    carDatails;

  return (
    <>
      <li className={s.card_container}>
        <div className={s.car_image}>
          <img
            src={
              gallery[0] ||
              'https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*'
            }
            alt="car_image"
          />
        </div>
        <div className={s.car_description}>
          <div className={s.title_container}>
            <h3>{`${name}`}</h3>
            <span>&#8364;{price.toFixed(2)}</span>
            <button
              ref={refFavButton}
              className={s.button_favorite}
              onClick={() => handleFavorite(_id)}
            >
              <Icons id={'icon-heart'} fill="none" size="24" />
            </button>
          </div>
          <Reviews rating={rating} reviews={reviews} location={location} />
          <span className={s.text_description}>{description}</span>
          <CarFeaturesList carDatails={carDatails} limits={5} />
          <Button onClick={handleCloseModal} className={'showMore'}>
            Show more
          </Button>
        </div>
      </li>

      {isOpenModal && (
        <Modal onClose={handleCloseModal} className="modal">
          <CarModal id={_id} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default CarItem;
