import { Injectable } from '@angular/core';
import { YoutubeService } from '@main/services/youtube.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MainActions from '@store/actions/main.actions';
import { catchError, map, switchMap, of } from 'rxjs';

@Injectable()
export class MainEffects {
  fetchVideoLyrics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainActions.updateSearch),
      switchMap(action =>
        this.ytService.getVideoLyrics(action.search).pipe(
          map(({ video, lyrics }) =>
            MainActions.updateVideoLyrics({ video, lyrics })
          ),
          catchError(error => of(MainActions.getVideoLyricsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private ytService: YoutubeService) {}
}
