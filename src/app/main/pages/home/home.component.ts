import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeVideo } from '@main/models/youtube';
import { YoutubeService } from '@main/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  private subs: Subscription = new Subscription();

  constructor() {}

  trackByVideoId(index: number, video: YoutubeVideo): string {
    return video.id.videoId;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
