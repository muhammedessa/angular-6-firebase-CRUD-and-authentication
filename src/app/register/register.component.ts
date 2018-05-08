import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string = '';
  password:string = '';
  itemList: AngularFireList<any>

  constructor(public db:AngularFireDatabase ,private fire:AngularFireAuth , private router: Router) { 
    this.itemList = db.list('users')
  }

  ngOnInit() {
  }

  myRegister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      console.log(this.email, this.password)
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email',this.fire.auth.currentUser.email )

      this.fire.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('uid',auth.uid )
  this.itemList.push({
    email: this.email ,
    uid : auth.uid
  })
  
        }
      })

      this.router.navigate(['home'])
    }).catch(error=>{
      console.error(error)
    })
  }



}
