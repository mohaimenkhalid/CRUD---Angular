import { Component, OnInit } from '@angular/core';
import {PaymentDetail} from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getPaymentDetails();
  }

  onDelelete(id) {
    this.service.deletePaymentDetail(id)
      .subscribe(
        res => {
          this.service.getPaymentDetails();
          this.toastr.success('Deleted successfully.', 'Success!');
        },
        err => {
          this.toastr.error('Something went wrong', 'Error!');
        }
      );
  }

  editForm(paymentDetail) {

  }

}
