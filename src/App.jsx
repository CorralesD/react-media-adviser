import { useState } from 'react';
import { MediaAPI } from './api/media';
import s from './style.module.css';
import { useEffect } from 'react';
import { BACKDROP_BASE_URL } from './config';
import MediaDetail from './components/MediaDetail/MediaDetail';
import Logo from './components/Logo/Logo';
import logoImage from './assets/images/logo.png';
import MediaListItem from './components/MediaListItem/MediaListItem';
import { MediaList } from './components/MediaList/MediaList';
import { SearchBar } from './components/SearchBar/SearchBar';

export const App = () => {
  const [currentMedia, setCurrentMedia] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopularMedia = async () => {
    try {
      const popularMediaList = await MediaAPI.fetchPopulars();
      if (popularMediaList.length > 0) {
        setCurrentMedia(popularMediaList[0]);
      }
    } catch (error) {
      alert('Something went wrong when fetching the popular tv shows');
    }
  };

  const fetchRecommendedMedia = async (mediaId) => {
    try {
      const recommendationMediaList = await MediaAPI.fetchReccomendations(
        mediaId
      );
      if (recommendationMediaList.length > 0) {
        setRecommendationList(recommendationMediaList.slice(0, 10));
      }
    } catch (error) {
      alert('Something went wront fetching the recommendations');
    }
  };

  const updateRecommendationsList = (media) => {
    setCurrentMedia(media);
  };

  const fetchByTitle = async (title) => {
    try {
      const searchResponse = await MediaAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentMedia(searchResponse[0]);
      }
    } catch (error) {
      alert('Something went wrong searching a tv show');
    }
  };

  useEffect(() => {
    fetchPopularMedia();
  }, []);

  useEffect(() => {
    if (currentMedia) {
      fetchRecommendedMedia(currentMedia.id);
    }
  }, [currentMedia]);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentMedia
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url("${BACKDROP_BASE_URL}${currentMedia.backdrop_path}") no-repeat center / cover`
          : 'black',
      }}
    >
      <div className={s.header}>
        <div className='row'>
          <div className='col-4'>
            <Logo
              img={logoImage}
              title={'New Favorite Show'}
              subtitle={'Find A New Show'}
            />
          </div>
          <div className='col-md-12 col-lg-4'>
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.media_detail}>
        {currentMedia && <MediaDetail currentMedia={currentMedia} />}
      </div>
      <div className={s.recommended_media}>
        {recommendationList && (
          <MediaList
            recommendations={recommendationList}
            onItemClick={updateRecommendationsList}
          />
        )}
      </div>
    </div>
  );
};
