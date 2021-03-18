import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import {PaymentDetail} from '../../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  formData = new PaymentDetail();
  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.service.postPaymentDetails(this.formData).subscribe(
        res => {
            console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

}
