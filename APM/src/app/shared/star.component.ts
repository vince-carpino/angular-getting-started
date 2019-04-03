import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  starWidth = 50;
  @Input() rating: number;
  @Output() ratingClicked = new EventEmitter<string>();

  ngOnChanges() {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`rating ${this.rating} was clicked`);
  }
}
