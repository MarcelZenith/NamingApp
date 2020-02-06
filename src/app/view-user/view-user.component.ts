import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '../../../node_modules/@angular/material';
import { CampaignService } from '../shared/campaign.service';
import { UserService } from '../new-user/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'email',
    'userType',
    'password',
    "functions"
  ];

  dataSource: MatTableDataSource<any>;
  allData: Array<any>;

  constructor(private service: CampaignService, private us: UserService) { }

  ngOnInit() {
    this.setUpTable();
  }

  onentry(entry) {
    console.log(entry);
    if(this.allData) {
      this.allData.push(entry)
    } else {
      this.allData = [entry]
    }

    this.dataSource = new MatTableDataSource(this.allData);
  }

  setUpTable(){
    if(this.us.users){
      this.allData = this.us.users;
      this.dataSource = new MatTableDataSource(this.allData);
    }

    
  }

  deleteElement(element) {
    console.log(element);
    this.allData = this.allData.filter(e => e.name !== element.name);
    this.dataSource = new MatTableDataSource(this.allData);
  }





}

