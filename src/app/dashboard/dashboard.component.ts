import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignService } from '../shared/campaign.service';
import { MatTableDataSource } from '../../../node_modules/@angular/material';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { UserService } from '../new-user/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = [
     'Brand',
     'campaignName',
    '$key',
    'CreativeName',
    'BaseURL',
    
    
    "functions"
  
   
   
    
  ];
  dataSource: MatTableDataSource<any>;
  allData: Array<any>;


  constructor(private service: CampaignService, public us: UserService) { }

  ngOnInit() {
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

  deleteElement(element) {
    console.log(element);
    this.allData = this.allData.filter(e => e.$key !== element.$key);
    this.dataSource = new MatTableDataSource(this.allData);
  }





}
