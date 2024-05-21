import EmblaCarousel from './EmblaCarousel';
import './embla.css';
import s from './Gallery.module.css';

// const Gallery = ({ images }) => {
//   return (
//     <ul className={s.galleryContainer}>
//       {images.map((image, index) => {
//         return (
//           <li className={s.galeryItem} key={index}>
//             <img src={image} alt="car image" />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

const Gallery = ({ images }) => {
  const OPTIONS = { dragFree: true };

  return <EmblaCarousel slides={images} options={OPTIONS} />;
};

export default Gallery;
