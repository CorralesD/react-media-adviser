import axios from 'axios';
import { POPULAR_MEDIA, MEDIA_LIST } from './dummy_data';
import { API_KEY_PARAM, BASE_URL } from '../config';

export class MediaAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return response.data.results;
  }

  static async fetchReccomendations(mediaId) {
    const response = await axios.get(
      `${BASE_URL}tv/${mediaId}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
