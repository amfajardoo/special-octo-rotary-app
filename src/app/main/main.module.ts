import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from '@main/main-routing.module';
import { MainComponent } from '@main/main.component';
import { HomeComponent } from '@main/pages/home/home.component';
import { VideoPlayerComponent } from '@main/components/video-player/video-player.component';
import { YoutubeService } from '@main/services/youtube.service';
import { VideoSearchComponent } from '@main/components/video-search/video-search.component';

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [CommonModule, MainRoutingModule, VideoSearchComponent, VideoPlayerComponent],
  providers: [YoutubeService],
})
export class MainModule {}
