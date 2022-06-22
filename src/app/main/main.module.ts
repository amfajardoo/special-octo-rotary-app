import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from '@main/main-routing.module';
import { MainComponent } from '@main/main.component';
import { HomeComponent } from '@main/pages/home/home.component';
import { VideoPlayerComponent } from '@main/components/video-player/video-player.component';
import { YoutubeService } from '@main/services/youtube.service';
import { VideoSearchComponent } from '@main/components/video-search/video-search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NothingToDisplayComponent } from '@main/components/nothing-to-display/nothing-to-display.component';
import { StoreModule } from '@ngrx/store';
import { mainKey, mainReducer } from '@store/reducers/main.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    VideoSearchComponent,
    VideoPlayerComponent,
    MatToolbarModule,
    NothingToDisplayComponent,
    StoreModule.forFeature(mainKey, mainReducer),
    EffectsModule.forFeature(),
  ],
  providers: [YoutubeService],
})
export class MainModule {}
