import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  form: FormGroup;
  @Output("addEntry") addEntry: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { 
    this.createForm()
  }



  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      $key: ["", Validators.required],
      Name: ["", Validators.required],
      email: ["", Validators.required],
      profile: ["", Validators.required],
   
     
    });
  }

  submit(){
    // if(this.form.valid){
      
      this.addEntry.emit(this.form.value);
      this.form.reset();
    // }
  }

  getCurrentUser(data) {
    console.log(data);
  
    
  }

}


