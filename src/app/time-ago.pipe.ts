import { Pipe, PipeTransform } from '@angular/core';
//import * as moment from "moment";
@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29)
        return 'Just now';
      const intervals:any = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
     // let dateCounter;
     // for (const i in intervals) {
       // dateCounter = Math.floor(seconds / intervals[i]);
let dateCounter;
      for (const i in intervals) {
        dateCounter = Math.floor(seconds / intervals[i]);
        if (dateCounter > 0)
          if (dateCounter === 1) {
            return dateCounter + ' ' + i + ' ago'; 
          } else {
            return dateCounter + ' ' + i + 's ago'; 
          }
      }
    }
    return value;
  }
}

  
  // transform(value: any):number {
  //   let today:Date = new Date(); // get current date and time
  //   let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
  //   var dateDifference = Math.abs(todayWithNoTime - value) //returns value in milliseconds
  //   const secondInDay =86400; //60seconds* 60mins in an hour*24hours in a day
  //   var dateDifferenceSeconds = dateDifference*0.001; //converts milliseconds to seconds
  //   var dateCounter = dateDifferenceSeconds/secondInDay;

  //   if (dateCounter >=1 && value < todayWithNoTime){
  //     return dateCounter;

  //   }
  //   else {
  //     return 0;
  //   }
  // }

