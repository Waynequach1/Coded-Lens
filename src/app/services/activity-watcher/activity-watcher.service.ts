import { Injectable } from '@angular/core';
import { AlexaInfo } from './models';

@Injectable({
  providedIn: 'root'
})
export class ActivityWatcherService {
  private alexaData: AlexaInfo;
  constructor() {
    this.alexaData = this.initializeAlexaData();
   }

   public updateAlexaData(data: AlexaInfo) {
    this.alexaData = data;
   }

   public getAlexaData() {
    return this.alexaData;
   }


   public initializeAlexaData(): AlexaInfo {
    return ({
      foundConversations: [],
      // Taken from highest number in data file
      totalConversations: 18, 
      foundSecrets: [],
      // Taken from highest number in data file
      totalSecrets: 1,
    })
   }
}
