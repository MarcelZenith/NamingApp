import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  title ='pro1';
  userData:any=[
    {name:"Marcel", email:"mibon@publicis.com",profile:"BI Dev"},
    {name:"John", email:"john@publicis.com",profile:"Dev"},
    {name:"Mike", email:"mike@publicis.com",profile:"Tester"},
    {name:"Anja", email:"anja@publicis.com",profile:"Director"}
  ];
  submitForm(name,email,profile) : void{
    let obj:any={};
        obj['name']=name;
        obj['email']=email;
        obj['profile']=profile;

        console.log(obj);
  }
  getCurrentUser(user) : void{
    console.log(user);
  }

  constructor() { 
    console.log(this.userData);
  }

  ngOnInit() {
  }

}
