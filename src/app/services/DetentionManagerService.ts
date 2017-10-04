import { environment } from './../../environments/environment.prod';
import { DetentionManagerItem } from './../Models/DetentionManagerItem';
import { Terminal } from './../Models/Terminal';
import 'rxjs/add/operator/map';

import { EventEmitter, Injectable }     from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';


@Injectable()
export class DetentionManagerService {

    constructor (private http: Http) {}
    
    chosenTerminalID = 0;
    
    private detentionManagerTerminalsUrl = environment.terminalApiUrl; 
    
    terminals = [ ];

    selectedTerminalEmitter: EventEmitter<Terminal> =  new EventEmitter<Terminal>();
    
    
     // Fetch all existing comments
     public getTerminals() : Observable<Terminal[]> 
     {
       
          // ...using get request
          return this.http.get(this.detentionManagerTerminalsUrl)
          .map((res:Response) => <Terminal>res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
         
     }

     public getDetentionManagerItems(ID : number) : Observable<DetentionManagerItem[]> 
     {
        
        this.chosenTerminalID =ID;

        // this.detentionManagerUrl = `http://yard-manager-api.raymont.local/api/detentationManager/${this.chosenTerminalID}`;
        
          // ...using get request
          return this.http.get(environment.detentionApiUrl + this.chosenTerminalID)
          .map((res:Response) => <DetentionManagerItem>res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
         
     }


    
}