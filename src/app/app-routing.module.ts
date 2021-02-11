import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GitserviceService} from './services/gitservice.service';
import {Github} from './github';
import {RepositoriesComponent} from './repositories/repositories.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'profiles', component: HomeComponent},
  { path: 'repos', component: RepositoriesComponent},
  { path: '', redirectTo:"/profiles", pathMatch:"full"},
  { path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
