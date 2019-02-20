import { Component, OnInit } from '@angular/core';
import{HalfService} from '../services/half.service';

@Component({
  selector: 'app-irish',
  templateUrl: './irish.component.html'
})
export class IrishComponent implements OnInit {

  constructor(private halfservice: HalfService) { }

  ngOnInit() {
  }
  uimhir : number;
	leath : number;

  	fuairHalf() {
      //this.leath = this.uimhir/2;
      this.leath = this.halfservice.getHalf(this.uimhir);
  	}

}
