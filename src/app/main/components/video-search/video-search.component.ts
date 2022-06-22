import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { YoutubeService } from '@main/services/youtube.service';
import { tap } from 'rxjs';
import { VideosStore } from '@main/store/video.store';

@Component({
  selector: 'app-video-search',
  standalone: true,
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss'],
  providers: [YoutubeService],
  imports: [ReactiveFormsModule, MatInputModule, MatIconModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoSearchComponent {
  searchInput = new FormControl<string>('', { nonNullable: true});

  constructor(private readonly videosStore: VideosStore) {
    this.searchInput.valueChanges.pipe(
      tap(search => {
        this.videosStore.updateSearch(search);
      })
    )
  }
}
