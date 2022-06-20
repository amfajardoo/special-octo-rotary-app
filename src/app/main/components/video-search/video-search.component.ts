import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { YoutubeService } from '@main/services/youtube.service';

@Component({
  selector: 'app-video-search',
  standalone: true,
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss'],
  providers: [YoutubeService],
  imports: [ReactiveFormsModule, MatInputModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoSearchComponent {
  searchInput = new FormControl<string>('');
}
