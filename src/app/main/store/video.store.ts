import { Injectable } from "@angular/core";
import { VideoLyrics, YoutubeVideo } from "@main/models/youtube";
import { YoutubeService } from "@main/services/youtube.service";
import { ComponentStore } from "@ngrx/component-store";
import { concatMap, Observable } from "rxjs";

export interface VideosState {
  video: YoutubeVideo | null;
  lyrics: string;
  search: string;
}

const initialState: VideosState = {
  video: null,
  lyrics: '',
  search: ''
}

@Injectable()
export class VideosStore extends ComponentStore<VideosState> {
  readonly video$: Observable<YoutubeVideo | null> = this.select(state => state.video);
  readonly search$: Observable<string> = this.select(state => state.lyrics);
  private readonly fetchVideoLyricsData$ = this.select(
    this.search$,
    (search) => ({ search }),
    { debounce: true }
  )

  constructor(private youtubeService: YoutubeService) {
    super(initialState);

    this.fetchVideoLyrics(this.fetchVideoLyricsData$)
  }


  private readonly fetchVideoLyrics = this.effect(
    (videoLyricsPageData$: Observable<{ search: string }>) => {
      return videoLyricsPageData$.pipe(
        concatMap(({search}) => {
          return this.youtubeService.getVideos(search)
        })
      )
    }
  )

  readonly updateSearch = this.updater((state, search: string) => ({
    ...state,
    search
  }));

  readonly updateVideoLyrics = this.updater((state, {video, lyrics}: VideoLyrics) => ({
    ...state,
    video,
    lyrics
  }));

}