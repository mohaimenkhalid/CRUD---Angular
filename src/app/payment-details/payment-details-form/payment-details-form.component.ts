import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import {PaymentDetail} from '../../shared/payment-detail.model';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  public formData = new PaymentDetail();
  constructor(public service: PaymentDetailService,
              private toastr: ToastrService
              ) { }

  ngOnInit(): void {
  }

  onSubmit(paymentDetailsForm) {
      this.service.postPaymentDetails(this.formData).subscribe(
        res => {
          this.service.getPaymentDetails();
          this.resetForm(paymentDetailsForm);
          this.toastr.success('Payment details inserted successfully.', 'Success!');
        },
        err => {
          this.toastr.error('Something went wrong.', 'Error!');
        }
      );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new PaymentDetail();
  }

}
