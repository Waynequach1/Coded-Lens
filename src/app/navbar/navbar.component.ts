import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from './models/navigation-item.model';
import { navigationItems } from './data/navigtion-items';
import { ActivityWatcherService } from '../services/activity-watcher/activity-watcher.service';
import { CodeData } from '../services/activity-watcher/models';
import { Observable, map, of, tap } from 'rxjs';

@Component({
  selector: 'coded-lens-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public navigationItems!: Observable<NavigationItem[]>;
  public selectedItem?: NavigationItem;

  private router: Router;
  private activityWatcherService: ActivityWatcherService;

  constructor(router: Router, activityWatcherService: ActivityWatcherService) {
    this.router = router;
    this.activityWatcherService = activityWatcherService;
  }

  ngOnInit(): void {
    this.navigationItems = this.getNavigationItems();
  }

  public routeTo(item?: NavigationItem) {
    if (this.selectedItem || item) {
      this.router.navigateByUrl(this.selectedItem?.route || item?.route || '');
      // Reset the Selected Item in case Navigtion fails. Bad fix but it should work for now
      this.selectedItem = undefined;
    }
  }


  private getNavigationItems() {
    const codeData = this.activityWatcherService.getCodeData();

    return codeData.pipe(map((data) => {
      const potato = navigationItems.map((item) => {
        item = this.updateNavigationLockStatus(item, data);
        item.routeItems = item.routeItems?.map((routeItem) => this.updateNavigationLockStatus(routeItem, data))
        return item;
      })
  
      console.log(potato);
      return potato;
    }))
    
  }

  // Force users to traverse website in certain order to best learning experience.
  // This handles the navigation unlocks. Should technically handle by route guards but I am low on time.
  private updateNavigationLockStatus(item: NavigationItem, data: CodeData) {
      if (item.name === 'The Lens At Work') {
        item.locked = !data.the_code;
      } else if (item.name === 'The Implications' || item.name === 'The Good') {
        item.locked = !(data.the_code && data.the_lens);
      } else if (item.name === 'Activities') {
        item.locked = !data.finished_all;
      }

      if (!item.locked) {
        item.lockedMessage = '';
      }
      
      return item;
  }
}
