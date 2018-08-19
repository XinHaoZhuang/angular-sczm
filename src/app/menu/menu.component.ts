import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }
  menues: Menu[];
  ngOnInit() {
      this.getHeroes();
  }
  getHeroes(): void {
    this.menuService.getMenues().subscribe(menues => this.menues = menues);
  }

}
