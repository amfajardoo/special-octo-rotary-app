import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { YoutubeService } from '@main/services/youtube.service';
import { tap } from 'rxjs';
import { MainState } from '@store/reducers/main.reducer';
import { Store } from '@ngrx/store';
import { updateSearch } from '@store/actions/main.actions';

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
  searchLabel = 'Type Song name Artist name';
  searchInput = new FormControl<string>('', { nonNullable: true });

  constructor(private readonly mainStore: Store<MainState>) {}

  valueChanges(search: string) {
    this.mainStore.dispatch(updateSearch({ search }));
  }
}
