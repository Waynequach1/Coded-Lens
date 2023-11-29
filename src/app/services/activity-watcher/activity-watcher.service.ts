import { Injectable } from '@angular/core';
import { AlexaInfo, CodeData } from './models';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityWatcherService {
  private alexaData: AlexaInfo;
  // Needs to be behaviour subject for instant access as well as updating navigation links
  // Throws ExpressionChangedAfterItHasBeenCheckedErrors but not a big concern for now
  private codeData: BehaviorSubject<CodeData>;
  private acceptedClassroomPrompt: boolean = false;

  constructor() {
    this.alexaData = this.initializeAlexaData();
    this.codeData = new BehaviorSubject(this.initializeCodeData());
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
    const newValue = this.codeData.value;
    newValue[key] = true;

    if (newValue.the_good && newValue.the_implications && newValue.the_lens) {
      newValue.finished_all = true;
    }

    this.codeData.next(newValue)
   }

   private initializeCodeData(): CodeData {
    return ({
      the_code: false,
      the_good: false,
      the_implications: false, 
      the_lens: false,
      finished_all: false,
    })
   }
}
