import MediaListItem from '../MediaListItem/MediaListItem';
import s from './style.module.css';

export const MediaList = ({ recommendations, onItemClick }) => {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {recommendations.map((recommendation) => {
          return (
            <span className={s.tv_show_item} key={recommendation.id}>
              <MediaListItem media={recommendation} onClick={onItemClick} />
            </span>
          );
        })}
      </div>
    </div>
  );
};
