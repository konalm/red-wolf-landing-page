import type { VideoCourse, MemberVideoCourse } from '../types/videoCourse.types';
import { API_URL  } from '../constants/general.constants';
import axios from 'axios';
import type { UserCompletedVideoResponse } from '../types/videoCourse.types';

export async function getVideoCourse(uuid: string): Promise<VideoCourse> {
  return useFetch<VideoCourse>(`${API_URL}/video-courses/${uuid}/content`)
    .then((response) => response.data.value as VideoCourse)
}

export async function userCompletedVideo(videoId: string): Promise<UserCompletedVideoResponse> {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('auth_token')}`
  }

  console.log('HEADERS', headers);

  return axios.post(`${API_URL}/user-completed-video`, { videoId }, { headers })
    .then((response) => response.data)
}

export async function getMemberCourses(): Promise<MemberVideoCourse[]> {
  return axios.get(`${API_URL}/video-courses`)
    .then((response) => response.data as MemberVideoCourse[])
}
