import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import {Router} from '@angular/router';
 


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  // name :string = 'muhammed'
  // phone :string = '07001231234'
  // comments :string = ' place your comments here'
  // skill :string = ' IT'
  // province :string = 'Kirkuk'
  // price :string = '2000'

 data = {
  name : '' ,
  phone :  '' ,
  comments :  '' ,
  skill :  '' ,
  province :  '' ,
  price :  '' 
 } 

 email:string = '';
 uid:any;
 itemList: AngularFireList<any>
 
  constructor(private fire:AngularFireAuth ,public db:AngularFireDatabase , public router:Router) { 
    this.itemList = db.list('skills')

    let user =  localStorage.getItem('email')
    this.email = user
    console.log( user)
    console.log( '-----------------------')

    this.uid =  localStorage.getItem('uid')
    console.log( 'uid: '+ this.uid)

//     this.fire.authState.subscribe(auth=>{
//       if(auth){
// this.uid = auth.uid
// console.log( 'uid: '+ this.uid)
//       }
//     })
   
  }

  ngOnInit() {
   
 console.log( this.data.name )
  }

 
  insertSkill(){
    
 
     
    this.itemList.push({
      name : this.data.name ,
      phone :  this.data.phone ,
      comments : this.data.comments ,
      skill :  this.data.skill ,
      province :  this.data.province ,
      price :  this.data.price  ,
      email: this.email ,
      uid : this.uid
    })

this.router.navigate(['/myskill'])

  }


}
