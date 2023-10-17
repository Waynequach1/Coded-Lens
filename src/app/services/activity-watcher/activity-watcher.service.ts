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

   public getAlexaData() {
    return this.alexaData;
   }


   private initializeAlexaData(): AlexaInfo {
    return ({
      foundConversations: 0,
      // TODO FETCH THIS NUMBER
      totalConversations: 0, 
      foundSecrets: 0,
      // TODO: FETCH THIS NUMBER
      totalSecrets: 0,
    })
   }
}
