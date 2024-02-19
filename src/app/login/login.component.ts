import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  NavigationStart
} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) {

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
       
          document.querySelector(".main-panel").classList.add("w-100");
          document
            .querySelector(".page-body-wrapper")
            .classList.add("full-page-wrapper");
          document
            .querySelector(".content-wrapper")
            .classList.remove("auth", "auth-img-bg");
          document
            .querySelector(".content-wrapper")
            .classList.remove("auth", "lock-full-bg");
      }
    });
  }

  ngOnInit() {}

  signIn(){
    localStorage.setItem("jwtToken", "982497848748743");
    this.router.navigate(["/main"]);
  }
}

