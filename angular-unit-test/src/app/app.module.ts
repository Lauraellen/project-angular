import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'info', component: InfoComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
