import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee, SrcDesti } from '../app/models/employee';
import { Observable } from 'rxjs';
import { Options } from 'selenium-webdriver/edge';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = '/api/customer';
  // private _url2 = '/assets/customerList.json';
  private url3 = 'http://localhost:3000/users';
  private url4 = 'http://localhost:3000/srcDisti';
  private url5 = 'http://localhost:3000/insertCustomer';

  public model;
  constructor(private http: HttpClient) {

  }
  getCustomer(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url3);
  }

  // pushData(): Observable<any> {
  //   this.model = new Array<Employee>();
  //   return this.http.post(this.url5, );
  // }


  //   private createApiHeader(): any {

  //      {
  //         const headers = new HttpHeaders({
  //             'Content-Type': 'application/json', 'Accept-Language': 'en-US',

  //         });
  //         const options = { headers: headers, withCredentials: false };
  //         return options;
  //     }
  // }
  // getCustomerbyAPI(): Observable<Employee[]> {
  //   return new Observable<Employee[]>(observer => {
  //     // const options = this.createApiHeader();
  //     this.http.get(this.url).subscribe((resp: any) => {

  //       if (resp.data.length > 0 || (resp.data !== '' && resp.data != null && resp.data !== undefined)) {
  //         observer.next(resp.data);
  //       } else {
  //         observer.next(undefined);
  //         observer.complete();
  //       }
  //     });
  //   });
  // }
  getCustomerSrcDestiByApi(): Observable<SrcDesti[]> {
    return this.http.get<SrcDesti[]>(this.url4);
  }

}
