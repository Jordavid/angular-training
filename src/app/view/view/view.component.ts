import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  username: string;
  response: object;
  className: string = "";
  constructor(private http: HttpClient) { 
    this.username = "";
  }

  ngOnInit() {
  }

  search(){

    this.http.get("https://api.github.com/users/" + this.username).subscribe((response) => {

      this.response = response;

    });  
  }

  toggleModal(){
    if(this.className == ""){
      this.className = "is-active";
    } else{
      this.className = "";
    }
  }

}
