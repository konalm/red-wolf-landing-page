export interface Video {
  UUID: string;
  name: string;
  duration: string;
  createdAt: string;
  cloudFlareId: string;
  chapterUUID: string;
  order: number;
}

export interface VideoWithChapter extends Video {
  chapter: {
    UUID: string;
    name: string;
    courseUUID: string;
    chapter: number;
  }
}

export interface VideoNavigationChapter {
  chapter: string;
  duration: string;
  videos:  Video[];
}

export interface GetVideoResponse {
  video: VideoWithChapter;
  navigation: VideoNavigationChapter[];
}