import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campaigns', component: CampaignsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
