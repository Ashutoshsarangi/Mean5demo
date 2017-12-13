import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-social-logins',
  templateUrl: './social-logins.component.html',
  styleUrls: ['./social-logins.component.css']
})
export class SocialLoginsComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
   user: SocialUser;
   loggedIn: boolean;

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
  
    signInWithFB(): void {
      alert("Hello1");
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signOut(): void {
      this.authService.signOut();
    }
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
      });
    }

}
	
// Ashutosh's first app
// This app is in development mode and can only be used by app admins, developers and testers
// API Version
// v2.10
// App ID
// 154048408536203
// App Secret
// 8388fe664ffe85b44ad94dd16bdf78bb



//https://handsontable.github.io/angular-handsontable/quick-start data-sheet

"use strict";

// var a = 10;
// for (var _a = 0; _a < 5; _a++) {
//   console.log(_a);
// }
// console.log(a);