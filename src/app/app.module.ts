import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// multi language
import { TranslateModule, TranslateLoader} from "@ngx-translate/core";
import { TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule} from "@angular/common/http";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  importProvidersFrom(HttpClientModule),
  importProvidersFrom(TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  }))],
  bootstrap: [AppComponent],
})
export class AppModule {}
