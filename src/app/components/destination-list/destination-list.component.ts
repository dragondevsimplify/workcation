import { Component } from '@angular/core';
import { DestinationItemComponent } from '../destination-item/destination-item.component';
import { CommonModule } from '@angular/common';
import { DestinationItem } from '../../models';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [CommonModule, DestinationItemComponent],
  templateUrl: './destination-list.component.html',
})
export class DestinationListComponent {
  destinationList: DestinationItem[] = [
    {
      imageUrl:
        'https://placehold.co/512x512/fca311/14213d?text=Toronto&font=source-sans-pro',
      name: 'Toronto',
      price: 120,
      status: 'night average',
      propertyQuantity: 76,
    },
    {
      imageUrl:
        'https://placehold.co/512x512/fca311/14213d?text=Malibu&font=source-sans-pro',
      name: 'Malibu',
      price: 215,
      status: 'night average',
      propertyQuantity: 43,
    },
    {
      imageUrl:
        'https://placehold.co/512x512/fca311/14213d?text=Chicago&font=source-sans-pro',
      name: 'Chicago',
      price: 130,
      status: 'night average',
      propertyQuantity: 115,
    },
    {
      imageUrl:
        'https://placehold.co/512x512/fca311/14213d?text=Seattle&font=source-sans-pro',
      name: 'Seattle',
      price: 135,
      status: 'night average',
      propertyQuantity: 63,
    },
    {
      imageUrl:
        'https://placehold.co/512x512/fca311/14213d?text=Colorado&font=source-sans-pro',
      name: 'Colorado',
      price: 85,
      status: 'night average',
      propertyQuantity: 47,
    },
    {
      imageUrl:
        'https://placehold.co/512x512/fca311/14213d?text=Miami&font=source-sans-pro',
      name: 'Miami',
      price: 115,
      status: 'night average',
      propertyQuantity: 86,
    },
  ];
}
