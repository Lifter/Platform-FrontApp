import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Application } from '../models/application.model';

@Component({
  selector: 'app-application-grid',
  templateUrl: './application-grid.component.html',
  styleUrls: ['./application-grid.component.sass']
})
export class ApplicationGridComponent implements OnInit {
  applications: Application[] = [];
  page = 1;
  pageSize = 10;
  total = 0;
  sortField = 'name';
  sortDirection = 'asc';
  statusFilter = '';
  authorFilter = '';

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.applicationService.getApplications(
      this.page,
      this.pageSize,
      this.sortField,
      this.sortDirection,
      this.statusFilter,
      this.authorFilter
    ).subscribe(response => {
      this.applications = response.items;
      this.total = response.total;
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.loadApplications();
  }

  onSort(sortField: string) {
    if (this.sortField === sortField) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = sortField;
      this.sortDirection = 'asc';
    }
    this.loadApplications();
  }

  onFilterChange() {
    this.page = 1;
    this.loadApplications();
  }
}