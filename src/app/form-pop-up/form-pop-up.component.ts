import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-form-pop-up',
  templateUrl: './form-pop-up.component.html',
  styleUrls: ['./form-pop-up.component.css']
})
export class FormPopUpComponent implements OnInit {

  @Output("addEntry") addEntry: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  countries: Array<string> = ["ES", "FR", "HU","IT","LUX"];
  Medium: Array<string> = ["Display", "Search", "Social", "email"];
  Brand: Array<string> = ["Toyota", "Lexus"];
  Screen: Array<string> = ["Desktop", "Mobile","mobile-web","mobile-in-app","tablet-in-app","tablet-web"];
  Placement: Array<string> = ["RON", "ROE", "PMP","trueview"];
  Targeting: Array<string> = ["retargeting", "prospecting"];
  BuyType: Array<string> = ["CPC", "CPM","CPV","fixed","CPA"];
  BannerType: Array<string> = ["standard", "rich-media","Video"];
  UnitSize: Array<string> = ["180x150", "120x600","160x600","300x250","300x600","468x60","728x90","800x250","970x250","30s"];
  Language: Array<string> = ["ES", "FR", "HU","IT","LUX"];
  BaseURL: Array<string> = ["https://www.toyota.co.uk/new-cars/aygo/index.json", "http://www.lexus.co.uk/car-models/rx/rx-450h/#Introduction"];
  AdvertiserName: Array<string> = ["toyota_ES", "toyota_BE"];
  PlacementName: Array<string> = ["ES_mobile-in-app_elpais_elpais_social_RON_prospecting_CPC_standard_728x90_010416-150416", "BE_desktop_conde-nast_vogue_display_trueview_retargeting_CPM_rich-media_160x600_160616-010716"];
  CreativeName: Array<string> = ["toyota_ES", "toyota_BE"];
  Objective: Array<string> = ["lauch", "tactical","retargeting", "always-on","brand","x"];
  CreativeDelivery: Array<string> = ["dynamic", "rotation","sequential"];
  LaunchDate: Date =null;
  FlightDate: Date =null;
  minDate = new Date(1990, 0, 1);
  maxDate = new Date(2020,0,1);

  constructor(private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      $key: ["Publisher"],
      campaignName: ["Campaign Name"],
      productType: ["Product Type"],
      country: ["Country"],
      Medium: [""],
      publisher: ["Publisher"],
      SiteName: ["Site Name"],
      Brand: [""],
      Objective: [""],
      Screen: [""],
      Placement: [""],
      Targeting: [""],
      BuyType: [""],
      BannerType: [""],
      Message: ["Message"],
      UnitSize: [""],
      Language: [""],
      CallToAction: ["Call to Action"],
      CreativeDelivery:[""],
      BaseURL:[""],
      AdvertiserName:[""],
      PlacementName:[""],
      CreativeName:[""],
      LaunchDate: [""],
      FlightDate: [""]
     
    });
  }

  submit(){
    // if(this.form.valid){
      
      this.addEntry.emit(this.form.value);
      this.form.reset();
    // }
  }

}
