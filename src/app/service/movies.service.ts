import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

 // private readonly URL = 'http://www.omdbapi.com/?s=films&apikey=afb82e05';
  
 private readonly URL = 'http://145.239.8.207:30000/produitsall';

  constructor(private http: HttpClient) { }

  resolveItems(): Observable<any> {
    return this.http.get(this.URL);
  }
}
