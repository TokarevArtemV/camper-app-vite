import IconsSprite from '../../assets/static/icons/sprite.svg';
import s from './Icons.module.css';

const Icons = ({
  id,
  className = '#',
  size = '16',
  height = '',
  fill = 'black',
  stroke = 'black',
}) => (
  <svg
    className={s[className]}
    width={size}
    height={height ? height : size}
    fill={fill}
    stroke={stroke}
  >
    <use href={`${IconsSprite}#${id}`} />
  </svg>
);

export default Icons;
