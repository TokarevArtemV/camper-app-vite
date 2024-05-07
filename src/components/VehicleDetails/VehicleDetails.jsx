import s from './VehicleDetails.module.css';

const VehicleDetails = ({ carDatails }) => {
  const { form, length, width, height, tank, consumption } = carDatails;
  const vehicleDetails = { form, length, width, height, tank, consumption };

  return (
    <ul className={s.detailList}>
      {Object.keys(vehicleDetails).length > 0 &&
        Object.keys(vehicleDetails).map((detail, index) => {
          return (
            <li key={index} className={s.detailItem}>
              <p>{detail}</p>
              <p>{vehicleDetails[detail]}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default VehicleDetails;
