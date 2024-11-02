import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'api/applications'; // Замените на реальный URL вашего API

  constructor(private http: HttpClient) {}

  getApplications(page: number, pageSize: number, sortField: string, sortDirection: string, statusFilter?: string, authorFilter?: string): Observable<{ items: Application[], total: number }> {
    let url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}&sortField=${sortField}&sortDirection=${sortDirection}`;
    if (statusFilter) {
      url += `&status=${statusFilter}`;
    }
    if (authorFilter) {
      url += `&author=${authorFilter}`;
    }
    return this.http.get<{ items: Application[], total: number }>(url);
  }

  getApplication(id: number): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  createApplication(application: Omit<Application, 'id'>): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, application);
  }

  updateApplication(id: number, application: Partial<Application>): Observable<Application> {
    return this.http.put<Application>(`${this.apiUrl}/${id}`, application);
  }

  deleteApplication(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}