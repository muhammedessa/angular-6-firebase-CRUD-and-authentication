import { Component, OnInit, AnimationStyles } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {


  itemList: AngularFireList<any>

itemArray = []

data = {
  name : '' ,
  phone :  '' ,
  comments :  '' ,
  skill :  '' ,
  province :  '' ,
  price :  '' 
 } 

myUid:any

  constructor(public db:AngularFireDatabase , public router:Router) {
    this.itemList = db.list('skills')

    this.itemList.snapshotChanges()
    .subscribe(actions=>{
          actions.forEach(action=>{
            let y = action.payload.toJSON()
            y["$key"] = action.key
            this.itemArray.push(y as ListItemClass)
  
})
    })

this.myUid =  localStorage.getItem('uid')
    console.log(this.itemArray)


   }

  ngOnInit() {
  }


  editForm( $key){

    for (let value of  this.itemArray) {
      if (value['$key'] == $key) {
        console.log(value['$key'])
        this.data.name = value['name'] ;
        this.data.phone = value['phone'] ;
        this.data.comments = value['comments'] ;
        this.data.skill = value['skill'] ;
        this.data.province = value['province'] ;
        this.data.price = value['price'] ;
      }
     
      
    }
  }
  


  onEdit( $key ){
 
    this.data.name 
    this.data.phone  
    this.data.comments  
    this.data.skill  
    this.data.province  
    this.data.price  

    this.itemList.set($key , {
      name : this.data.name ,
      phone :  this.data.phone ,
      comments : this.data.comments ,
      skill :  this.data.skill ,
      province :  this.data.province ,
      price :  this.data.price  
    })
  
    this.itemArray = []
    


  }

  onDelete( $key){
    this.itemList.remove($key);
    this.itemArray = []
  }


}





export class ListItemClass{
  $key: string;
  name : string;
  phone :  string;
  comments :  string;
  skill :  string;
  province : string;
  price :  string;
}