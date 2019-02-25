import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  items:object;

  constructor() { 
    this.items = {
      name: "Daouda Sanogo",
      age: 26
    }
  }

  print2Console(arg: any){
    console.log(arg);
  }

  getItems(){
    console.log(this.items);
  }
}
