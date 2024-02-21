import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) {
  }

  ngOnInit() {}

  signIn(){
    localStorage.setItem("jwtToken", "982497848748743");
    this.router.navigate(["/main"]);
  }
}

