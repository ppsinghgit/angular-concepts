import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="text-center">
    <span class="small">Data Bind - Router Outlet</span>
  </div>
  <router-outlet></router-outlet>
  `
})
export class DataBindComponent {
}
