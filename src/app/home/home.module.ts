import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {HeaderComponent} from "../shared/components/header/header.component";
import {TranslateModule} from "@ngx-translate/core";
import {SignInComponent} from "../shared/components/header/sign-in/sign-in.component";
import {SignUpComponent} from "../shared/components/header/sign-up/sign-up.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        TranslateModule
    ],
  declarations: [HomePage, HeaderComponent, SignInComponent, SignUpComponent]
})
export class HomePageModule {}
