import axios from 'axios';
import { POPULAR_MEDIA, MEDIA_LIST } from './dummy_data';
import { BASE_URL } from '../config';

export class MediaAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
    );
    return response.data.results;
  }

  static async fetchReccomendations(mediaId) {
    const response = await axios.get(
      `${BASE_URL}tv/${mediaId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
    );
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
