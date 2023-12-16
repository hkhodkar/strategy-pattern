import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAllElementComponent } from './demo-all-element/demo-all-element.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'all', component: DemoAllElementComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
