import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './nav.routes.module';
import { AppComponent } from './app.component';
import { NavSideComponent } from './sidenav/navSide.component';
import { NavMenuComponent } from './sidenav/navMenu.component';
import { SideItemComponent } from './sidenav/navItem.component';
import { detailComponent } from './detail/detail.component';
import { MenusService } from './services/menus.services.component';
@NgModule({
declarations: [
AppComponent,
NavSideComponent,
NavMenuComponent,
SideItemComponent,
detailComponent
],
imports: [
BrowserModule,
BrowserAnimationsModule,
AppRoutesModule
],
providers: [MenusService],
bootstrap: [AppComponent]
})
export class AppModule { }
