import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { CampaignService } from './shared/campaign.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormPopUpComponent } from './form-pop-up/form-pop-up.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AdminComponent } from './admin/admin.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import {MatNativeDateModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthGuard } from './auth.guard';

// import { MatMomentDateModule } from "@angular/material";
  


const appRoutes:Routes = [
  {
    path:'',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'ViewUser',
    component: ViewUserComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'NewUser',
    component: NewUserComponent,
    canActivate: [ AuthGuard ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    FormPopUpComponent,
    AdminComponent,
    ViewUserComponent,
    NewUserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    // MatMomentDateModule,
    MatNativeDateModule,
    MatPaginatorModule
   
    
 
    
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 