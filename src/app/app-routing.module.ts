import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { TakeComponent } from './take/take.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "menu", component: MenuComponent
}, {
  path: "dishes/:id", component: DetailsComponent
}, {
  path: "take", component: TakeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
