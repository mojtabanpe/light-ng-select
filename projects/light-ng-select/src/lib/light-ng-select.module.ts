import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LightNGSelectComponent } from './light-ng-select.component';



@NgModule({
  declarations: [
    LightNGSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LightNGSelectComponent
  ]
})
export class LightNGSelectModule { }
