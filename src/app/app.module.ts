import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { SpinnerComponent } from "./shared/spinner/spinner.component";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { ContentAnimateDirective } from "./shared/directives/content-animate.directive";
import { HttpClientModule } from "@angular/common/http";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    ContentAnimateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
