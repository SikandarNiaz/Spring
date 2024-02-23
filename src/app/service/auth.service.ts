import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = ["http://localhost:8080/"];

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "login", loginRequest);
  }

  hello(): Observable<any> {
    return this.http.get(BASE_URL + "api/hello", {
      headers: this.createAuthorizationHeader(),
    });
  }
}
