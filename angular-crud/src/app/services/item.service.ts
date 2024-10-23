import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:3000/items'; // Example API URL

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get<any>(${this.baseUrl}/${id});
  }

  createItem(item: any): Observable<any> {
    return this.http.post(this.baseUrl, item);
  }

  updateItem(id: number, item: any): Observable<any> {
    return this.http.put(${this.baseUrl}/${id}, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(${this.baseUrl}/${id});
  }
}
