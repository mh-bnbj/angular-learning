import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeneratePassword';

  password: string;

  constructor(){
    this.password="";
  }

  myfunction(){
    this .password = "your password!";
  }

  getPassword(){
    return this.password;
  }
}

