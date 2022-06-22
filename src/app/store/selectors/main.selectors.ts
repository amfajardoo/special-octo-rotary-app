import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mainKey, MainState } from '@store/reducers/main.reducer';

export const selectMain = createFeatureSelector<MainState>(mainKey);

export const selectVideo = createSelector(selectMain, state => state.video);

export const selectSearch = createSelector(selectMain, state => state.search);
