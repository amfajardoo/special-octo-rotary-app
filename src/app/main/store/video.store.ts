import { Injectable } from "@angular/core";
import { VideoLyrics, YoutubeVideo } from "@main/models/youtube";
import { YoutubeService } from "@main/services/youtube.service";
import { ComponentStore } from "@ngrx/component-store";
import { concatMap, debounceTime, distinctUntilChanged, filter, Observable, tap } from "rxjs";

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
  readonly search$: Observable<string> = this.select(state => state.search);
  private readonly fetchVideoLyricsData$ = this.select(
    this.search$.pipe(filter(search => !!search.length)),
    (search) => ({ search }),
  )

  constructor(private youtubeService: YoutubeService) {
    super(initialState);

    this.fetchVideoLyrics(this.fetchVideoLyricsData$)
  }

  readonly updateSearch = this.updater((state, search: string) => ({
    ...state,
    search
  }));

  private readonly updateVideoLyrics = this.updater((state, {video, lyrics}: VideoLyrics) => ({
    ...state,
    video,
    lyrics
  }));

  private readonly fetchVideoLyrics = this.effect(
    (videoLyricsPageData$: Observable<{ search: string }>) => {
      return videoLyricsPageData$.pipe(
        debounceTime(1000),
        concatMap(({search}) => {
          return this.youtubeService.getVideoLyrics(search).pipe(
            tap((results) => this.updateVideoLyrics({ video: results.video, lyrics: results.lyrics }))
          )
        })
      )
    }
  );

}