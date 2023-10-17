import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from './models/navigation-item.model';
import { navigationItems } from './data/navigtion-items';

@Component({
  selector: 'coded-lens-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public navigationItems: NavigationItem[] = navigationItems;
  public selectedItem?: NavigationItem;

  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public routeTo(item?: NavigationItem) {
    if (this.selectedItem || item) {
      this.router.navigateByUrl(this.selectedItem?.route || item?.route || '');
      // Reset the Selected Item in case Navigtion fails. Bad fix but it should work for now
      this.selectedItem = undefined;
    }
  }
}
