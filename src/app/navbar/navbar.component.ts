import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  private isLoggedIn: Boolean= false;
  private email: String;


  constructor(public afAuth: AngularFireAuth, public router:Router) { 
   

    let status = localStorage.getItem('isLoggedIn')
    console.log(status)

    if (status === 'true') {
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }


    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     this.isLoggedIn = true;
    //   } else {
    //     // No user is signed in.
    //     this.isLoggedIn = false;
        
    //   }
    // });


  }

  ngOnInit() {
 

    
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false
    localStorage.setItem('isLoggedIn','false')
  
    localStorage.setItem('email', '' )
    localStorage.setItem('uid','' )

    this.router.navigate(['/login'])
  }


}
