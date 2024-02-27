import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlankPageComponent } from "./blank-page/blank-page.component";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DropdownModule } from "primeng/dropdown";

const routes: Routes = [{ path: "blank-page", component: BlankPageComponent }];

@NgModule({
  declarations: [BlankPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    DropdownModule,
  ],
})
export class GeneralPagesModule {}
