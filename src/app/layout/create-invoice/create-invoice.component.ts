import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormArray } from "@angular/forms";
import { InvoiceService } from "../invoice.service";

@Component({
  selector: "app-create-invoice",
  templateUrl: "./create-invoice.component.html",
  styleUrls: ["./create-invoice.component.scss"],
})
export class CreateInvoiceComponent implements OnInit {
  hospitalList: any = [];
  invoiceDetail: FormArray;
  serviceDetails: any = [];
  filteredServiceDetails: any = [];
  invoiceForm: any;
  serviceId: any;
  vendorId: any;
  constructor(
    private builder: FormBuilder,
    private invoiceService: InvoiceService
  ) {
    this.invoiceForm = this.builder.group({
      invoiceNo: this.builder.control("", Validators.required),
      hospital: this.builder.control("", Validators.required),
      remarks: this.builder.control(""),
      invoiceDate: this.builder.control("", Validators.required),
      invoiceMonth: this.builder.control("", Validators.required),
      details: this.builder.array([]),
    });

    this.hospitalList = JSON.parse(localStorage.getItem("hospitals"));
    this.serviceId = JSON.parse(localStorage.getItem("userInfo")).serviceId;
    this.vendorId = JSON.parse(localStorage.getItem("userInfo")).vendorId;
  }

  ngOnInit() {
    this.getServiceDetails();
  }

  getServiceDetails() {
    this.invoiceService
      .getServiceDetails(this.serviceId, this.vendorId)
      .subscribe(
        (response) => {
          if (response) {
            this.serviceDetails = response;
            console.log(this.serviceDetails[0]);
          }
        },
        (error: any) => {
          console.log("Error");
        }
      );
  }

  addAutoService() {
    this.invoiceDetail = this.invoiceForm.get("details") as FormArray;
    this.invoiceDetail.clear();
    this.serviceDetails.forEach((element) => {
      if (element.hospitalId == this.invoiceForm.get("hospital")?.value) {
        if (element.auto == "Y") {
          this.invoiceDetail.push(this.generateAutoService(element));
        }
        this.filteredServiceDetails.push(element);
      }
    });
  }
  addNewService() {
    this.invoiceDetail = this.invoiceForm.get("details") as FormArray;
    this.invoiceForm.controls.details.insert(0, this.generateRow());
  }

  generateRow() {
    return this.builder.group({
      selectedService: this.builder.control("", Validators.required),
      monthlyChargesWithoutTax: this.builder.control(0, Validators.required),
      totalAmountWithoutTax: this.builder.control(0, Validators.required),
      qty: this.builder.control(0),
      auto: this.builder.control("N"),
      taxPercentage: this.builder.control(0),
      salesTax: this.builder.control(0),
      totalAmountWithTax: this.builder.control(0, Validators.required),
    });
  }
  get invproducts() {
    return this.invoiceForm.get("details") as FormArray;
  }
  generateAutoService(element) {
    return this.builder.group({
      selectedService: this.builder.control({
        value: element,
        disabled: true,
      }),
      monthlyChargesWithoutTax: this.builder.control({
        value: element.amount,
        disabled: true,
      }),
      totalAmountWithoutTax: this.builder.control({
        value: element.amount,
        disabled: true,
      }),
      auto: this.builder.control({
        value: element.auto,
      }),
      qty: this.builder.control({ value: element.qty, disabled: true }),
      taxPercentage: this.builder.control({ value: 0, disabled: true }),
      salesTax: this.builder.control({ value: 0, disabled: true }),
      totalAmountWithTax: this.builder.control({
        value: element.amount,
        disabled: true,
      }),
    });
  }
}
