import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm: any = {
    username: "",
    password: "",
  };
  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}
  ngOnInit() {}

  signIn(loginForm: any) {
    console.log(loginForm);
    this.authService.login(loginForm).subscribe(
      (response) => {
        if (response.token) {
          localStorage.setItem("jwtToken", response.token);
          localStorage.setItem("menus", JSON.stringify(response.menus));
          localStorage.setItem("userInfo", JSON.stringify(response.user));
          localStorage.setItem("hospitals", JSON.stringify(response.hospitals));
          this.router.navigate(["/main"]);
        }
      },
      (error: any) => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Please check if credentials are correct",
        });
      }
    );
  }
}
