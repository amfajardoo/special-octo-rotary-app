import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nothing-to-display',
  standalone: true,
  templateUrl: './nothing-to-display.component.html',
  styleUrls: ['./nothing-to-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NothingToDisplayComponent {
  @Input() message: string = 'Oops! Nothing to display!';
}
