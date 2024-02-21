import { Component, OnInit } from "@angular/core";
import {
  Router,
  NavigationEnd,
  NavigationStart,
} from "@angular/router";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  title = "demo1";

  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;

  constructor(private router: Router) {
    if(!localStorage.getItem("jwtToken")){
      this.router.navigate(["/login"]);
    }

    router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
          this.showSidebar = true;
          this.showNavbar = true;
          this.showFooter = true;
          document.querySelector(".main-panel").classList.remove("w-100");
          document
            .querySelector(".page-body-wrapper")
            .classList.remove("full-page-wrapper");
          document
            .querySelector(".content-wrapper")
            .classList.remove("auth", "auth-img-bg");
          document.querySelector(".content-wrapper").classList.remove("p-0");
    }})
  }

  ngOnInit() {
    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
