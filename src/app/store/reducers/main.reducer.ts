import { YoutubeVideo } from '@main/models/youtube';
import { createReducer, on } from '@ngrx/store';
import * as MainActions from '@store/actions/main.actions';

export const mainKey = 'main';

export interface MainState {
  video: YoutubeVideo | undefined;
  search: string;
  lyrics: string;
}

export const initialState: MainState = {
  video: undefined,
  search: '',
  lyrics: '',
};

export const mainReducer = createReducer(
  initialState,
  on(MainActions.updateSearch, (state, { search }) => ({ ...state, search }))
);
