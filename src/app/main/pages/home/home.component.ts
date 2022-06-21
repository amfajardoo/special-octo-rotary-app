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
  readonly videos$ = this.videosStore.videos$;

  constructor(private readonly videosStore: VideosStore) {}

  trackByVideoId(index: number, video: YoutubeVideo): string {
    return video.id.videoId;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
