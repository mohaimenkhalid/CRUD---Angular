import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }
  readonly baseUrl: string = 'http://localhost:8000/api/paymentDetails';

  postPaymentDetails(paymentDetail: PaymentDetail) {
    return this.http.post<PaymentDetail>(this.baseUrl, paymentDetail);
  }

  /*enroll(user: User) {
    return this.http.post<any>(this._URL, user).pipe(
      catchError(this.errorHandler)
    );
  }*/

}
