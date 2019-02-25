import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  isCollapsed: boolean = true;
  toggleValue: string = "Expand";
  user: object;

  constructor() {

    this.user = {
      name: 'Daouda Sanogo',
      address: "8 Nikhaba, El Mashtel St, Boulaq Ad Dakrour, Giza",
      position: "Software Engineer",
      phone: [
        '01113681920', '01112547820'
      ]
    };
   }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed == false){
      this.toggleValue = "Collapse";
    } else {
      this.toggleValue = "Expand";
    }
  }

  ngOnInit() {
  
  }

}
