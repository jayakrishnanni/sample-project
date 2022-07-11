import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  userdata: any;
  postdata: any;
  bodyofPost: any;
  

  constructor( private user : UsersService) {

  }

  ngOnInit(){
   this.user.getUsers().subscribe((users:any)=> {
   this.userdata = users;
   console.log('users' + JSON.stringify(this.userdata))
   

  }) 

  this.user.getPosts().subscribe((posts:any)=> {
    this.postdata = posts;
    console.log('posts' + JSON.stringify(this.postdata))
  }) 
  }


  getpostData(dataId: any): void {
    console.log('abc')
      if(dataId){
        console.log('abc' + JSON.stringify(this.postdata));
         this.bodyofPost = this.postdata.filter((datas:any) => {
          console.log('datas.user_id' + JSON.stringify(datas.user_id));
          console.log('dataId' + JSON.stringify(dataId));
          if(datas.user_id === dataId){
            return datas;
          }
         });
        // this.bodyofPost.forEach(function(item: any){item.isActive = true;});
        this.bodyofPost.forEach((item: any) => item.isActive = true);
        
        console.log('id' + JSON.stringify(this.bodyofPost.length))
        console.log('user id' + JSON.stringify(this.bodyofPost.user_id))
        console.log('title' + JSON.stringify(this.bodyofPost.title))
        console.log('body' + JSON.stringify(this.bodyofPost.body))
        
        // for(let i=0; i<=data.length;i++ ) {

        //   dataId = data[i].id;
        //   return dataId;
        // }
      }
  }

  
}
