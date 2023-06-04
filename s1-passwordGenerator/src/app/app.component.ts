import {
  Component,
  Type
}

from '@angular/core';
import { generate } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }

) export class AppComponent {
  title = 'GeneratePassword';

  password: string;
  includeLatters: boolean = false;
  includeSymbuls: boolean = false;
  includeNumbers: boolean = false;
  length: number = 0;

  constructor() {
    this.password = "";
  }

  myfunction() {
    
	const numbers = "123456789";
	const letters = "abcdefghijklmnopqrstuvwxyz";
	const symbols ="!@#$%^&*()_+";
	
	let validChars ="";

	if(this.includeLatters) validChars+=letters;
	
	if(this.includeNumbers) validChars+= numbers;

	if(this.includeSymbuls) validChars+= symbols;

	let generatedPassword = "";

	for(let index =0 ; index< this.length ; index++){
		let randIndex = Math.floor(Math.random()*validChars.length);
		generatedPassword += validChars[randIndex];
	}

	this.password = generatedPassword;

  }

  getPassword() {
    return this.password;
  }

  onChangeLatter() {
    this.includeLatters = !this.includeLatters;

  }

  onChangeNumber() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbuls() {
    this.includeSymbuls = !this.includeSymbuls;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) this.length = parsedValue;
	else this.length = 0;
  }
}
