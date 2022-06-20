import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from '@main/main-routing.module';
import { MainComponent } from '@main/main.component';
import { HomeComponent } from '@main/pages/home/home.component';
import { YtPlayerAngularModule } from 'yt-player-angular';
import { VideoPlayerComponent } from '@main/components/video-player/video-player.component';
import { YoutubeService } from '@main/services/youtube.service';

@NgModule({
  declarations: [MainComponent, HomeComponent, VideoPlayerComponent],
  imports: [CommonModule, MainRoutingModule, YtPlayerAngularModule],
  providers: [YoutubeService],
})
export class MainModule {}
