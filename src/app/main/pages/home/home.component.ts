import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from '@store/reducers/main.reducer';
import { selectVideo } from '@store/selectors/main.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly video$ = this.mainStore.select(selectVideo);

  constructor(private readonly mainStore: Store<MainState>) {}
}
