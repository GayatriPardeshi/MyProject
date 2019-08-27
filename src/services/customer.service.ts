import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../app/models/employee';
import { Observable } from 'rxjs';
import { Options } from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = '/api/customer';
 // private _url2 = '/assets/customerList.json';
  private url3 = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  getCustomer(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url3);
  }


//   private createApiHeader(): any {

//      {
//         const headers = new HttpHeaders({
//             'Content-Type': 'application/json', 'Accept-Language': 'en-US',

//         });
//         const options = { headers: headers, withCredentials: false };
//         return options;
//     }
// }
  getCustomerbyAPI(): Observable<Employee[]> {
    return new Observable<Employee[]>(observer => {
      // const options = this.createApiHeader();
      this.http.get(this.url).subscribe((resp: any) => {

        if (resp.data.length > 0 || (resp.data !== '' && resp.data != null && resp.data !== undefined)) {
          observer.next(resp.data);
        } else {
          observer.next(undefined);
          observer.complete();
        }
      });
    });
  }

}
