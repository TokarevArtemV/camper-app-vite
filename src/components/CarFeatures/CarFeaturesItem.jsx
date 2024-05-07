import { Icons } from '../';
import s from './CarFeaturesItem.module.css';

const CarFeaturesItem = ({ feature, value, className = '' }) => {
  if (value < 1 || !feature) return;

  switch (feature) {
    case 'adults':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-adults'} />
          <p>{`${value} Adults`}</p>
        </li>
      );
    case 'transmission':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-transmission'} fill="none" />
          <p>{`${value}`}</p>
        </li>
      );
    case 'engine':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-engine'} />
          <p>{`${value}`}</p>
        </li>
      );
    case 'kitchen':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-kitchen'} fill="none" />
          <p>{`${value > 1 ? value : ''} Kitchen`}</p>
        </li>
      );
    case 'beds':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-beds'} fill="none" />
          <p>{value > 1 ? `${value} Beds` : `${value} Bed`}</p>
        </li>
      );
    case 'airConditioner':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons
            id={!className ? 'icon-airConditioner' : 'icon-conditioner'}
            fill="none"
          />
          <p>{!className ? `AC` : 'Air conditioner'}</p>
        </li>
      );
    case 'cd':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-cd'} fill="none" />
          <p>{value > 1 ? `${value} CD` : 'CD'}</p>
        </li>
      );
    case 'radio':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-radio'} fill="none" />
          <p>{value > 1 ? `${value} Radio` : 'Radio'}</p>
        </li>
      );
    case 'plate':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-plate'} fill="none" />
          <p>{value > 1 ? `${value} Plates` : 'Plate'}</p>
        </li>
      );
    case 'tv':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-tv'} fill="none" />
          <p>{value > 1 ? `${value} TV` : 'TV'}</p>
        </li>
      );
    case 'freezer':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-freezer'} fill="none" />
          <p>{value > 1 ? `${value} Freezers` : 'Freezer'}</p>
        </li>
      );
    case 'microwave':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-microwave'} fill="none" />
          <p>{value > 1 ? `${value} Microwaves` : 'Microwave'}</p>
        </li>
      );
    case 'shower':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-shower'} />
          <p>{value > 1 ? `${value} Showers` : 'Shower'}</p>
        </li>
      );
    case 'toilet':
      return (
        <li className={`${s.featureItem} ${className ? s[className] : ''}`}>
          <Icons id={'icon-toilet'} />
          <p>{value > 1 ? `${value} Toilets` : 'Toilet'}</p>
        </li>
      );

    default:
      break;
  }
  return;
};

export default CarFeaturesItem;
