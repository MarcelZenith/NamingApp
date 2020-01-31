import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../shared/campaign.service';
import { MatTableDataSource } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = [
    '$key',
    'campaignName',
    'productType',
    'country',
    'Medium',
    'SiteName',
    'launchDate',
     'Brand',
    'Objective',
    'Screen', 
    'Placement',
    'Targeting',
    'BuyType',
    'BannerType',
    'Message',
    'UnitSize', 
    'Language',
    'CallToAction',
    'CreativeDelivery',
    'BaseURL',
    'AdvertiserName',
    'PlacementName',
    'CreativeName',
   
    "functions"
  
   
   
    
  ];
  dataSource: MatTableDataSource<any>;
  allData: Array<any>;

  constructor(private service: CampaignService) { }

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
