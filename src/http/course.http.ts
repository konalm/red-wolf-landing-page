import type { VideoCourse } from '../types/videoCourse.types';

const URL = 'http://127.0.0.1:3001';

export async function getVideoCourse(uuid: string): Promise<VideoCourse> {
  return useFetch<VideoCourse>(`${URL}/video-courses/${uuid}/content`)
    .then((response) => response.data.value as VideoCourse)
}