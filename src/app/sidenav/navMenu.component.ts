import { Component, OnInit } from '@angular/core';
import { MenusService } from '../services/menus.services.component';
@Component({
// tslint:disable-next-line:component-selector
selector: 'nav-menu',
templateUrl: './navMenu.component.html',
styleUrls: ['./navMenu.component.css']
})
export class NavMenuComponent implements OnInit {
menus = [];
constructor(
private _menusService: MenusService
) { }
ngOnInit() {
this._menusService.getMenu().then(data => {
this.menus = data;
});
}
}
