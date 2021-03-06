import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{  //implements onInit biz dedik ekledik.
  title = 'udemy-angular-course';

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) {}

  ngOnInit() {    //onInıt olduğunda showSuccess'i çalıştırsın. Şuan her proje çalıştığında bu toastr çalışacak.
    this.showSuccess();
    this.showSpinner()
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  
  showSpinner(){
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  
}
