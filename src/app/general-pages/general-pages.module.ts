import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlankPageComponent } from "./blank-page/blank-page.component";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{ path: "blank-page", component: BlankPageComponent }];

@NgModule({
  declarations: [BlankPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, FormsModule,ReactiveFormsModule],
})
export class GeneralPagesModule {}
