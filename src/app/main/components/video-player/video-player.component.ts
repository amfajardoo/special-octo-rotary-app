import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerOptions, YtPlayerAngularModule } from 'yt-player-angular';
import { YoutubeVideo } from '@main/models/youtube';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [YtPlayerAngularModule],
})
export class VideoPlayerComponent {
  @Input() video!: YoutubeVideo;

  readonly options: PlayerOptions = {
    width: 250,
    height: 250,
    autoplay: false,
    captions: false,
    controls: false,
    keyboard: false,
    fullscreen: false,
  };
}
