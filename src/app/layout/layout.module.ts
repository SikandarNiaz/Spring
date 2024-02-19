import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { TodoComponent } from "../apps/todo-list/todo/todo.component";
import { TodoListComponent } from "../apps/todo-list/todo-list.component";
import { MenuItemsComponent } from '../shared/menu-items/menu-items.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MegaMenuModule } from "primeng/megamenu";

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ChartsModule, ThemeService } from "ng2-charts";


@NgModule({
  declarations: [LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    MenuItemsComponent,
    LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MegaMenuModule
  ],
  providers: [ThemeService],
})
export class LayoutModule { }

