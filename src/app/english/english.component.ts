import { Component, OnInit } from '@angular/core';
import{HalfService} from '../services/half.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor(private halfservice:HalfService) { }

  ngOnInit() {
  }
  number : number;
	half : number;

  	getHalf() {
      //this.half = this.number/2;
      this.half = this.halfservice.getHalf(this.number);
  	}

}
