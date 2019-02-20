import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HalfService {

  constructor() { }
  getHalf(myNum: number):number{
    return myNum/2;
  }
}
