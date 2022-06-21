import { Injectable } from "@angular/core";
import { YoutubeVideo } from "@main/models/youtube";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";

export interface VideosState {
  videos: YoutubeVideo[];
}

const initialState: VideosState = {
  videos: []
}

@Injectable()
export class VideosStore extends ComponentStore<VideosState> {
  readonly videos$: Observable<YoutubeVideo[]> = this.select(state => state.videos);
  
  constructor() {
    super(initialState);
  }
}