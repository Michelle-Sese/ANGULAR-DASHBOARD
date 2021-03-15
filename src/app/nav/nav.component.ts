import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  toolbarTitle: string;
  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.toolbarTitle =  this.router.url.replace('/','');
        }
      }
    );
  }
}
