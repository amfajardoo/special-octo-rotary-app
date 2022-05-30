import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeVideo } from '../../models/youtube';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  private subs: Subscription = new Subscription();

  videoList: YoutubeVideo[] = [];

  constructor(private ytService: YoutubeService) {}

  searchVideo(videoName: string) {
    this.ytService.getVideos(videoName).subscribe(data => {
      this.videoList = data;
    });
  }

  trackByVideoId(index: number, video: YoutubeVideo): string {
    return video.id.videoId;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
