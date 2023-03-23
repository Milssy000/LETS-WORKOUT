import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpiderService } from './services/spider.service';

import { ExercicePhysiqueModule } from './modules/exercice-physique/exercice-physique.module';
import { ApiKeyInterceptor } from './modules/exercice-physique/intercepteurs/api-key.interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExercicePhysiqueModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule{}
