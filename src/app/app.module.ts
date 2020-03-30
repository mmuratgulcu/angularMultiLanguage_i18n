import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { TranslateService } from './services/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('tr');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampaignsComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: setupTranslateFactory, deps: [TranslateService],multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
