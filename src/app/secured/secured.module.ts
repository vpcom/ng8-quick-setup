import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredRoutingModule } from './secured-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [HomeContainerComponent, DataComponent],
  imports: [
    CommonModule,
    SecuredRoutingModule
  ]
})
export class SecuredModule { }
