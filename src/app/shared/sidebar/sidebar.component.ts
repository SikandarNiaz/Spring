import { Component, OnInit } from "@angular/core";
import { MegaMenuItem } from "primeng/api";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public uiInvoiceCollapsed = false;
  public samplePagesCollapsed = false;
  items: MegaMenuItem[] | undefined;
  vertical: any;
  menuItems: any = [];
  userInfo: any = {};

  constructor() {
    this.menuItems = JSON.parse(localStorage.getItem("menus"));
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  ngOnInit() {
    const body = document.querySelector("body");

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll(".sidebar .nav-item").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
    this.items = [
      {
        label: "Reports",
        icon: "pi pi-envelope",
        items: [
          [
            {
              label: "Report 1",
              items: [{ label: "Report 1.1" }, { label: "Report 1.2" }],
            },
            {
              label: "Report 2",
              items: [{ label: "Report 2.1" }, { label: "Report 2.2" }],
            },
          ],
          [
            {
              label: "Report 3",
              items: [{ label: "Report 3.1" }, { label: "Report 3.2" }],
            },
            {
              label: "Report 4",
              items: [{ label: "Report 4.1" }, { label: "Report 4.2" }],
            },
          ],
        ],
      },
      {
        label: "Dashboards",
        icon: "pi pi-chart-line",
        items: [
          [
            {
              label: "Dashboard 1",
              items: [{ label: "Dashboard 1.1" }, { label: "Dashboard 1.2" }],
            },
            {
              label: "Dashboard 2",
              items: [{ label: "Dashboard 2.1" }, { label: "Dashboard 2.2" }],
            },
          ],
          [
            {
              label: "Dashboard 3",
              items: [{ label: "Dashboard 3.1" }, { label: "Dashboard 3.2" }],
            },
            {
              label: "Dashboard 4",
              items: [{ label: "Dashboard 4.1" }, { label: "Dashboard 4.2" }],
            },
          ],
          [
            {
              label: "Dashboard 5",
              items: [{ label: "Dashboard 5.1" }, { label: "Dashboard 5.2" }],
            },
            {
              label: "Dashboard 6",
              items: [{ label: "Dashboard 6.1" }, { label: "Dashboard 6.2" }],
            },
          ],
        ],
      },
      {
        label: "Finance",
        icon: "pi pi-chart-bar",
        items: [
          [
            {
              label: "Finance 1",
              items: [{ label: "Finance 1.1" }, { label: "Finance 1.2" }],
            },
            {
              label: "Finance 2",
              items: [{ label: "Finance 2.1" }, { label: "Finance 2.2" }],
            },
          ],
          [
            {
              label: "Finance 3",
              items: [{ label: "Finance 3.1" }, { label: "Finance 3.2" }],
            },
            {
              label: "Finance 4",
              items: [{ label: "Finance 4.1" }, { label: "Finance 4.2" }],
            },
          ],
        ],
      },
      {
        label: "Settings",
        icon: "pi pi-fw pi-cog",
        items: [
          [
            {
              label: "Setting 1",
              items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
            },
            {
              label: "Setting 2",
              items: [{ label: "Setting 2.1" }, { label: "Setting 2.2" }],
            },
            {
              label: "Setting 3",
              items: [{ label: "Setting 3.1" }, { label: "Setting 3.2" }],
            },
          ],
          [
            {
              label: "Technology 4",
              items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
            },
          ],
        ],
      },
    ];
  }
}
