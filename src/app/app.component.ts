import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, DestinationListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
