import { Component, Input } from '@angular/core';
import { DestinationItem } from '../../models';

@Component({
  selector: 'app-destination-item',
  standalone: true,
  imports: [],
  templateUrl: './destination-item.component.html',
  host: {
    'class': 'mt-6 w-full lg:w-1/2 lg:px-4 xl:w-1/3',
  }
})
export class DestinationItemComponent {
  @Input({ required: true }) info!: DestinationItem
}
