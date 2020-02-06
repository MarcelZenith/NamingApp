import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { UserService } from './user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  
  @Output("addEntry") addEntry: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  userType: Array<string> = ["admin", "user", "read","write"];
  message: string;

  constructor(private fb: FormBuilder, private us: UserService) { 
    this.createForm()
  }



  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      name: [""],
      email: [""],
      userType: [""],
      password: [""],
      profile: ""
    });
  }

  submit(){
    // if(this.form.valid){
      
      this.addEntry.emit(this.form.value);
      this.us.addUser(this.form.value);
      this.showMessage("user created");
      this.form.reset();
    // }
  }

  getCurrentUser(data) {
    console.log(data);
  }


  showMessage(message) {
    this.message = message;
    let that = this;
    setTimeout(function(){
      that.message = null;
    }, 1500)
  }

}


