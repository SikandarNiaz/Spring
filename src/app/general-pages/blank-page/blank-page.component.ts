import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blank-page",
  templateUrl: "./blank-page.component.html",
  styleUrls: ["./blank-page.component.scss"],
})
export class BlankPageComponent implements OnInit {
  inputValue: string = '';
  showPopup: boolean = false;

  suggestions = [
    { category: 'HR', service: 'HR Service', amount: 40000 },
    { category: 'IT', service: 'IT Support', amount: 35000 },
    { category: 'Finance', service: 'Financial Consulting', amount: 50000 },
    { category: 'Marketing', service: 'Marketing Campaign', amount: 45000 },
    // Add more data as needed
  ];

  filteredSuggestions: any[] = [];

  filterTable(): void {
    const searchTerm = this.inputValue.toLowerCase().trim();
    this.filteredSuggestions = this.suggestions.filter(option =>
      option.category.toLowerCase().includes(searchTerm) ||
      option.service.toLowerCase().includes(searchTerm) ||
      option.amount.toString().includes(searchTerm)
    );

    this.showPopup = this.inputValue.trim() !== '';
  }

  showTablePopup(): void {
    this.showPopup = this.inputValue.trim() !== '';
  }

  selectOption(option: any): void {
    this.inputValue = option.service;
    this.showPopup = false;
  }

  constructor() {}

  ngOnInit(): void {
  }

 
}
