import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { SomeComponentModule } from '../../components/some/some.component.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
    //HeaderComponentModule
  ],
  exports: [
    HomePage
  ]
})
export class MenuPageModule { }
