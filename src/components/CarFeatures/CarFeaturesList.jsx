import CarFeaturesItem from './CarFeaturesItem';
import s from './CarFeaturesList.module.css';

const CarFeaturesList = ({ carDatails, limits = 14, className }) => {
  const carFeatures = {
    adults: carDatails.adults,
    transmission: carDatails.transmission,
    engine: carDatails.engine,
    kitchen: carDatails.details.kitchen,
    beds: carDatails.details.beds,
    airConditioner: carDatails.details.airConditioner,
    cd: carDatails.details.CD,
    radio: carDatails.details.radio,
    tv: carDatails.details.TV,
    freezer: carDatails.details.freezer,
    microwave: carDatails.details.microwave,
    shower: carDatails.details.shower,
    toilet: carDatails.details.toilet,
  };

  for (let prop in carFeatures) {
    if (!carFeatures[prop]) {
      delete carFeatures[prop];
    }
  }

  return (
    <ul className={`${s.featureContainer} ${className ? s[className] : ''}`}>
      {Object.keys(carFeatures).length > 0 &&
        Object.keys(carFeatures).map((carFeature, index) => {
          if (index > limits) return;
          return (
            <CarFeaturesItem
              key={index}
              feature={carFeature}
              value={carFeatures[carFeature]}
              className={className}
            />
          );
        })}
    </ul>
  );
};

export default CarFeaturesList;
