import type { GetVideoResponse, Video } from '../types/video.types';

const URL = 'http://127.0.0.1:3001';

export async function getVideo(uuid: string): Promise<GetVideoResponse> {
  return useFetch<GetVideoResponse>(`${URL}/videos/${uuid}`)
    .then((response) => response.data.value as GetVideoResponse)
}

export async function getCourseVideoForUser(courseUUID: string): Promise<Video> {
  return useFetch<Video>(`${URL}/videos/course/${courseUUID}`)
    .then((response) => response.data.value as Video)
}
