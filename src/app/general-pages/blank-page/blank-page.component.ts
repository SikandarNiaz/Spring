import { Component, OnInit } from "@angular/core";
import { SelectItemGroup } from "primeng/api";

@Component({
  selector: "app-blank-page",
  templateUrl: "./blank-page.component.html",
  styleUrls: ["./blank-page.component.scss"],
})
export class BlankPageComponent implements OnInit {
  groupedServices: SelectItemGroup[];

  constructor() {}

  ngOnInit() {
    this.groupedServices = [
      {
        label: "HR",
        value: "de",
        items: [
          {
            label: "Supervisor Cum Electrician",
            value: "Supervisor Cum Electrician",
          },
          { label: "Electrician", value: "Electrician" },
          { label: "AC Technician", value: "AC Technician" },
          { label: "Plumber", value: "Plumber" },
        ],
      },
      {
        label: "System Maintainance",
        value: "us",
        items: [
          { label: "Maintainance Services", value: "Maintainance Services" },
        ],
      },
      {
        label: "Penaties",
        value: "jp",
        items: [
          { label: "Amount of Penalties", value: "Amount of Penalties" },
          {
            label: "Performance based fines",
            value: "Performance based fines",
          },
        ],
      },
    ];
  }
}
