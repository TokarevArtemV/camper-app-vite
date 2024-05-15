import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllCars, selectFavoriteCars } from '../../redux/selector';
import {
  CarFeaturesList,
  CarReviewesList,
  FormBooking,
  Gallery,
  Reviews,
  VehicleDetails,
} from '../';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import s from './CarModal.module.css';

const CarModal = ({ id }) => {
  const [selectedTab, setSelectedTab] = useState(-1);

  const handleSelect = (index) => {
    setSelectedTab(index);
  };
  const allCars = useSelector(selectAllCars);
  const favoriteCars = useSelector(selectFavoriteCars);

  const currenCar = (allCars.length > 0 ? allCars : favoriteCars).find(
    (car) => car._id === id
  );

  const { name, rating, reviews, price, location, gallery, description } =
    currenCar;

  return (
    <div className={s.modal_container}>
      <h3 className={s.modal_title}>{name}</h3>
      <Reviews
        className="modal"
        rating={rating}
        reviews={reviews}
        location={location}
      />
      <span className={s.price}>&#8364;{`${price}.00`}</span>
      <Gallery images={gallery} />
      <span className={s.description}>{description}</span>

      <Tabs onSelect={handleSelect} defaultIndex={selectedTab}>
        <TabList>
          <Tab>Features</Tab>
          <Tab>Reviews</Tab>
        </TabList>
        <TabPanel>
          <div className={s.features_container}>
            <div className={s.features_list}>
              <CarFeaturesList carDatails={currenCar} className={'modal'} />
            </div>
            <h3 className={s.subtitle}>Vehicle details</h3>
            <VehicleDetails carDatails={currenCar} />
          </div>
          <FormBooking />
        </TabPanel>
        <TabPanel>
          <div className={s.reviews_container}>
            <CarReviewesList carDatails={currenCar} />
          </div>
          <FormBooking />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CarModal;
