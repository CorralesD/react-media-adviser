import StarRating from '../StarRating/StarRating';
import s from './style.module.css';

const MediaDetail = ({ currentMedia }) => {
  const rating = currentMedia.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{currentMedia.name}</div>
      <div className={s.rating_container}>
        <StarRating rating={rating} />
        <span className={s.rating}>{Math.floor(rating)}/5</span>
      </div>
      <div className={s.overview}>{currentMedia.overview}</div>
    </div>
  );
};

export default MediaDetail;
