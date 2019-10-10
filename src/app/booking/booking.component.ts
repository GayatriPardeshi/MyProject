import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Employee } from '../models/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private custService: CustomerService, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      firstName: ['', Validators.required],
      lastName: [''],
      age: [''],
      address: [''],
      phoneNumber: []
    });
  }

  login() {
    this.http.post("http://localhost:3000/insertCustomer", this.form.value).subscribe(
      res => {
        console.log(res);
      }
    );
    // this.custService.pushData(this.form.value)
    //   .subscribe((resp: Employee[]) => {
    //   })
  //  console.log(this.form.value);
  }
}
