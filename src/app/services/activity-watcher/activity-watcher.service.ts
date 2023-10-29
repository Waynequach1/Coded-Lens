import { Injectable } from '@angular/core';
import { AlexaInfo, CodeData } from './models';

@Injectable({
  providedIn: 'root'
})
export class ActivityWatcherService {
  private alexaData: AlexaInfo;
  private codeData: CodeData;
  private acceptedClassroomPrompt: boolean = false;

  constructor() {
    this.alexaData = this.initializeAlexaData();
    this.codeData = this.initializeCodeData();
   }

   public updateAlexaData(data: AlexaInfo) {
    this.alexaData = data;
   }

   public getAlexaData() {
    return this.alexaData;
   }

   public getCodeData() {
      return this.codeData;
   }
   
   public getAcceptedClassroomPrompt() {
    return this.acceptedClassroomPrompt;
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

   public setAcceptedClassroomPrompt() {
    this.acceptedClassroomPrompt = true;
   }

   public updateCodeData(key: keyof CodeData ) {
    this.codeData[key] = true;

    if (this.codeData.the_good && this.codeData.the_implications && this.codeData.the_lens) {
      this.codeData.finished_all = true;
    }
   }

   private initializeCodeData(): CodeData {
    return ({
      the_good: false,
      the_implications: false, 
      the_lens: false,
      finished_all: false,
    })
   }
}
