import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MailerService } from 'src/app/services/mailer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private _mailer: MailerService, private toastr: ToastrService){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }
  
  sendEmail(){
    if (this.form.valid) {
      this._mailer.sendMail(this.form.value).subscribe(
        (result) => {
          this.showSuccess("Message sent successfully.")
          this.form.reset();
        }
      )
    } else{
      this.showError('Please fill all the required fields.')
    }
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }

  showError(message: string) {
    this.toastr.error(message);
  }
}
