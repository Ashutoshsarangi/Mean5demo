import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PaymentGateWayComponent} from './payment-gate-way/payment-gate-way.component';
import { FormsModule } from '@angular/forms';
import {DataSendService} from './data-send.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { SocialLoginsComponent } from './social-logins/social-logins.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { ChartComponent } from './chart/chart.component';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("309937255701-css1cfhpmefehpu7r4jpfkr679sin8kd.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("160404018045800")
  }
]);

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'payment', component: PaymentGateWayComponent },
  { path: 'fileUpload', component: FileUploadComponent },
  { path: 'fileDownload', component: DownloadFileComponent },
  { path: 'socialLogin', component: SocialLoginsComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes),FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),SocialLoginModule.initialize(config)
  ],
  declarations: [AppComponent,PaymentGateWayComponent,FileUploadComponent,DownloadFileComponent,
    HomeComponent,SocialLoginsComponent,ChartComponent],
    providers: [DataSendService],
})
export class AppRoutingModule { }
