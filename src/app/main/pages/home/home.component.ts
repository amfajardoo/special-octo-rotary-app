import { Component, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { YoutubeVideo } from '@main/models/youtube';
import { VideosState, VideosStore } from '@main/store/video.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [VideosStore]
})
export class HomeComponent implements OnDestroy {
  private subs: Subscription = new Subscription();
  readonly video$ = this.videosStore.video$;

  constructor(private readonly videosStore: VideosStore) {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
