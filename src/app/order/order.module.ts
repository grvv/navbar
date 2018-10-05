import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddedComponent } from './added/added.component';
import { ProcessingComponent } from './processing/processing.component';
import { PendingComponent } from './pending/pending.component';
import { DispatchedComponent } from './dispatched/dispatched.component';
import { DeliverdComponent } from './deliverd/deliverd.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        redirectTo : 'added',
        pathMatch : 'full'
      },
      {
        path : 'added',
        component : AddedComponent
      },
      {
        path : 'pending',
        component : PendingComponent
      },
      {
        path :'processing',
        component : ProcessingComponent
      },
      {
        path : 'dispatch',
        component : DispatchedComponent
      },
      {
        path : 'deliverd',
        component : DeliverdComponent
      }
    ])
  ],
  declarations: [AddedComponent, ProcessingComponent, PendingComponent, DispatchedComponent, DeliverdComponent]
})
export class OrderModule { }
