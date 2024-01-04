import s from './style.module.css';
import { SMALL_IMG_COVER } from '../../config';

const MAX_TITLE_CHAR = 20;

const MediaListItem = ({ media, onClick }) => {
  const onListItemClick = () => {
    onClick(media);
  };
  return (
    <div onClick={onListItemClick} className={s.container}>
      <img
        className={s.img}
        src={SMALL_IMG_COVER + media.backdrop_path}
        alt='thumbnail'
      />
      <div className={s.title}>
        {media.name.length > MAX_TITLE_CHAR
          ? media.name.slice(0, MAX_TITLE_CHAR) + '...'
          : media.name}
      </div>
    </div>
  );
};

export default MediaListItem;
