import type { GetVideoResponse, Video } from '../types/video.types';
import { API_URL } from '../constants/general.constants';

export async function getVideo(uuid: string): Promise<GetVideoResponse> {
  return useFetch<GetVideoResponse>(`${API_URL}/videos/${uuid}`)
    .then((response) => response.data.value as GetVideoResponse)
}

export async function getCourseVideoForUser(courseUUID: string): Promise<Video> {
  return useFetch<Video>(`${API_URL}/videos/course/${courseUUID}`)
    .then((response) => response.data.value as Video)
}
