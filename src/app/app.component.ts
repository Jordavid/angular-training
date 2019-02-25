import { Component } from '@angular/core';
import { UserModel } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: UserModel;
  className: string = "";
  constructor(private testService: TestService, private http: HttpClient){
    
    this.user = new UserModel();

    this.user.name = "Daouda Sanogo";
    this.user.address = "8 Nikhaba, El Mashtel St, Boulaq Ad Dakrour, Giza";
    this.user.position = "Software Engineer";
    this.user.phone = [
      '01113681920', '01112547820'
    ];

    // this.testService.print2Console("Cool Staff!");
  }

  ngOnInit(): void {
    let obs = this.http.get('https://api.github.com/users/Jordavid');
    obs.subscribe((response) => {
      
    })
  }

  toggleModal(){
    if(this.className == ""){
      this.className = "is-active";
    } else{
      this.className = "";
    }
  }
}
