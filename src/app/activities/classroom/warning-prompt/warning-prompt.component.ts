import { Component } from '@angular/core'; 
import { DynamicDialogRef } from 'primeng/dynamicdialog'; 
import { DynamicDialogConfig } from 'primeng/dynamicdialog'; 
import { tap } from 'rxjs';
  
@Component({ 
  templateUrl: './warning-prompt.component.html',
  styleUrls: ['./warning-prompt.component.css'],
}) 

export class WarningPrompt { 
    constructor( 
        public ref: DynamicDialogRef, 
        public config: DynamicDialogConfig 
    ) { 
    } 

    public onClick(val: boolean) {
        this.ref.close(val);
    }


}