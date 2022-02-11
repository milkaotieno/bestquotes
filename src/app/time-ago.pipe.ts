import { Pipe, PipeTransform } from '@angular/core';
//import * as moment from "moment";
@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

//   transform(value: any): string {
//     let timeCount: string = "";
//     let today: any = new Date();
//     var difference = Math.abs(value - today) / 1000;
//     var days       = Math.floor(difference / 86400);
//     if(days > 0){
//       timeCount   += Math.floor(days) +" days ";
//     }
//     difference    -= days * 86400;
//     var hours      = Math.floor(difference / 3600) % 24;
//     if(hours > 0){
//       timeCount   += Math.floor(hours)+" hrs ";
//     }
//     difference    -= hours * 3600;
//     var minutes    = Math.floor(difference / 60) % 60;
//     if(minutes > 0){
//       timeCount   += Math.floor(minutes)+" mins ";
//     }
//     difference    -= minutes * 60;
//     var seconds    = difference % 60;
//     if(seconds > 0){
//       timeCount  += Math.floor(seconds)+" secs ";
//     }
//     return timeCount;
//   }

// }


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

  
//   transform(value: any):number {
//     let today:Date = new Date(); // get current date and time
//     let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
//     var dateDifference = Math.abs(todayWithNoTime - value) //returns value in milliseconds
//     const secondInDay =86400; //60seconds* 60mins in an hour*24hours in a day
//     var dateDifferenceSeconds = dateDifference*0.001; //converts milliseconds to seconds
//     var dateCounter = dateDifferenceSeconds/secondInDay;

//     if (dateCounter >=1 && value < todayWithNoTime){
//       return dateCounter;

//     }
//     else {
//       return 0;
//     }
//   }
// }

