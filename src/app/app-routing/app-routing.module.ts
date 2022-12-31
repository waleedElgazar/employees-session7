import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ShowAllComponent} from "../show-all/show-all.component";
import {ShowUnBlockedComponent} from "../show-un-blocked/show-un-blocked.component";
import {ShowBlockedComponent} from "../show-blocked/show-blocked.component";
import {EmplpyeeDetailsComponent} from "../emplpyee-details/emplpyee-details.component";

let routingList = [
  {
    path:"home",
    component:ShowAllComponent
  },
  {
    path:"showUnBlocked",
    component:ShowUnBlockedComponent
  },
  {
    path:"showBlocked",
    component:ShowBlockedComponent
  },{
    path: "showDetails/:id",
    component: EmplpyeeDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routingList)
  ]
})
export class AppRoutingModule { }
