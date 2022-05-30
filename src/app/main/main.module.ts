import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { YtPlayerAngularModule } from 'yt-player-angular';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { YoutubeService } from './services/youtube.service';

@NgModule({
  declarations: [MainComponent, HomeComponent, VideoPlayerComponent],
  imports: [CommonModule, MainRoutingModule, YtPlayerAngularModule],
  providers: [YoutubeService],
})
export class MainModule {}
