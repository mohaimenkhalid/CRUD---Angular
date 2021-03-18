import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  public paymentDetails: PaymentDetail[];
  constructor(private http: HttpClient) { }
  readonly baseUrl: string = 'http://localhost:8000/api/paymentDetails';

  postPaymentDetails(paymentDetail: PaymentDetail) {
    return this.http.post<PaymentDetail>(this.baseUrl, paymentDetail);
  }

  getPaymentDetails() {
    return this.http.get<PaymentDetail[]>(this.baseUrl)
      .subscribe(
      (data: PaymentDetail[]) => this.paymentDetails = data
    );
  }



  deletePaymentDetail(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
