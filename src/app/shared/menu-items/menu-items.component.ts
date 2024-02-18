import { Component, OnInit } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { MegaMenuItem } from "primeng/api";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.scss"],
})
export class MenuItemsComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  items: MegaMenuItem[] | undefined;

  constructor(config: NgbDropdownConfig) {
    config.placement = "bottom-right";
  }

  ngOnInit() {
    this.items = [
      {
        label: "Videos",
        icon: "pi pi-fw pi-video",
        items: [
          [
            {
              label: "Video 1",
              items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
            },
            {
              label: "Video 2",
              items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
            },
          ],
          [
            {
              label: "Video 3",
              items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
            },
            {
              label: "Video 4",
              items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
            },
          ],
        ],
      },
      {
        label: "Users",
        icon: "pi pi-fw pi-users",
        items: [
          [
            {
              label: "User 1",
              items: [{ label: "User 1.1" }, { label: "User 1.2" }],
            },
            {
              label: "User 2",
              items: [{ label: "User 2.1" }, { label: "User 2.2" }],
            },
          ],
          [
            {
              label: "User 3",
              items: [{ label: "User 3.1" }, { label: "User 3.2" }],
            },
            {
              label: "User 4",
              items: [{ label: "User 4.1" }, { label: "User 4.2" }],
            },
          ],
          [
            {
              label: "User 5",
              items: [{ label: "User 5.1" }, { label: "User 5.2" }],
            },
            {
              label: "User 6",
              items: [{ label: "User 6.1" }, { label: "User 6.2" }],
            },
          ],
        ],
      },
      {
        label: "Events",
        icon: "pi pi-fw pi-calendar",
        items: [
          [
            {
              label: "Event 1",
              items: [{ label: "Event 1.1" }, { label: "Event 1.2" }],
            },
            {
              label: "Event 2",
              items: [{ label: "Event 2.1" }, { label: "Event 2.2" }],
            },
          ],
          [
            {
              label: "Event 3",
              items: [{ label: "Event 3.1" }, { label: "Event 3.2" }],
            },
            {
              label: "Event 4",
              items: [{ label: "Event 4.1" }, { label: "Event 4.2" }],
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

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector("body");
    if (
      !body.classList.contains("sidebar-toggle-display") &&
      !body.classList.contains("sidebar-absolute")
    ) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body.classList.add("sidebar-icon-only");
      } else {
        body.classList.remove("sidebar-icon-only");
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add("sidebar-hidden");
      } else {
        body.classList.remove("sidebar-hidden");
      }
    }
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }
}
