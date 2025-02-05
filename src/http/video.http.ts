import axios from 'axios';
import type { GetVideoResponse, Video } from '../types/video.types';
import { API_URL } from '../constants/general.constants';

export async function getVideo(uuid: string): Promise<GetVideoResponse> {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('auth_token')}`
  }

  return axios.get(`${API_URL}/videos/${uuid}`, { headers })
    .then((response) => response.data as GetVideoResponse)
}

export async function getCourseVideoForUser(courseUUID: string): Promise<Video> {
  return useFetch<Video>(`${API_URL}/videos/course/${courseUUID}`)
    .then((response) => response.data.value as Video)
}
