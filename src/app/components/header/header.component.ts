import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  showMainNav = false
  showProfileNav = false
  routeNameActivating = ''
  MD_WIDTH = 768

  ngOnInit() {
    this.detectShowMainNav(window)
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(e: UIEvent) {
    const target = e.target as Window

    if (!target) {
      return
    }

    this.detectShowMainNav(target)
  }

  detectShowMainNav(w: Window) {
    this.showMainNav = w.innerWidth >= this.MD_WIDTH
  }

  activeRoute(routeName: string) {
    this.routeNameActivating = routeName
  }

  // Only show toggle button on mobile
  toggleShowMainNav() {
    this.showMainNav = !this.showMainNav
    this.showProfileNav = this.showMainNav
  }

  toggleShowProfileNav() {
    this.showProfileNav = !this.showProfileNav
  }
}
