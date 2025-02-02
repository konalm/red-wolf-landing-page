interface KeyFeatureItem {
  name: string;
  icon: string;
}

interface VideoItem {
  title: string;
  id: string;
  duration: string;
  completed?: boolean;
}

export interface LessonItem {
  chapter: string;
  videos: VideoItem[];
}

export interface VideoCourse {
  UUID: string;
  name: string;
  belt: string;
  createdAt: string;
  imagePath: string;
  material: string;
  contentDir: string;
  featureImageUrl: string;
  previewVideoId: string;
  description: string;
  keyFeatures: KeyFeatureItem[];
  learningOutcomes: string[];
  lessons: LessonItem[];
  userStartedCourse?: boolean;
}

export interface UserCompletedVideoResponse {
  userCompletedVideo: {
    id: string;
    userId: string;
    videoId: string;
  }
  nextVideoId?: string;
}

export interface MemberVideoCourse {
  UUID: string;
  name: string;
  imagePath: string;
  belt: string;
  progress: {
    started: boolean;
    totalVideos: number;
    watchedVideos: number;
    percentageComplete: number;
  }
}
