import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { ExercicePhysiqueRoutingModule } from './exercice-physique-routing.module';
import { BicepsComponent } from './biceps/biceps.component';
import { SpiderService } from 'src/app/services/spider.service';
import { ApiKeyInterceptor } from 'src/app/modules/exercice-physique/intercepteurs/api-key.interceptor';



@NgModule({
  declarations: [BicepsComponent],
  imports: [
    CommonModule,
    ExercicePhysiqueRoutingModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi:true}, SpiderService],
  
})
export class ExercicePhysiqueModule {
  //comment
}

