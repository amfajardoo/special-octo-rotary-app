import { VideoLyrics } from '@main/models/youtube';
import { createAction, props } from '@ngrx/store';

export const updateSearch = createAction(
  '[Video Search Component] Search',
  props<{ search: string }>()
);

export const updateVideoLyrics = createAction(
  '[Fetch Video Lyrics] Effect',
  props<VideoLyrics>()
);

export const getVideoLyricsFailure = createAction(
  '[Update Video Lyrics] Failed',
  props<{ error: string }>()
);
