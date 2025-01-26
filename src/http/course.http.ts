import type { VideoCourse } from '../types/videoCourse.types';
import { API_URL  } from '../constants/general.constants';

console.log('API URL ', API_URL);


export async function getVideoCourse(uuid: string): Promise<VideoCourse> {
  return useFetch<VideoCourse>(`${API_URL}/video-courses/${uuid}/content`)
    .then((response) => response.data.value as VideoCourse)
}
