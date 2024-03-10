import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }

  getServiceDetails(serviceId, vendorId): Observable<any> {
    return this.http.get(
      BASE_URL +
        `/app/service-details?service_id=${serviceId}&vendor_id=${vendorId}`,
      {
        headers: this.createAuthorizationHeader(),
      }
    );
  }
}
