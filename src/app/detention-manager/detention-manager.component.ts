import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Terminal } from './../Models/Terminal';
import { Component, OnInit,ViewChild, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { DetentionManagerService } from '../services/DetentionManagerService';

import * as $ from "jquery";



@Component({
  selector: 'app-detention-manager',
  templateUrl: './detention-manager.component.html',
  styleUrls: ['./detention-manager.component.css']
})
export class DetentionManagerComponent implements OnInit, OnDestroy {


  private gridOptions: IgGrid;
  itemResource = null;
  items = [];
  chosenTerminal : Terminal;
  itemCount = 0;
  terminals = [ ];
  private id: string = "grid1";

  private _detentionManagerTerminalsSubscription: Subscription;
  private _detentionManagerItemsSubscription: Subscription;
  
  

  constructor(private _detentionManagerService: DetentionManagerService) 
  {
    
  }

  ngOnInit() {

    // this._detentionManagerTerminalsSubscription = this._detentionManagerService.getTerminals().subscribe(results => { 
    //   console.log(results);
    //   this.terminals = results ;
    // });

    // this.onChange();
    this.populate();
  }

  ngOnDestroy() {

    this._detentionManagerTerminalsSubscription.unsubscribe();
    this._detentionManagerItemsSubscription.unsubscribe();
    
    
  }

  populate() : void {
    this.gridOptions = {
      dataSource: this.items,
      width: "100%",
      autoCommit: true,
      autoGenerateColumns: false,
      onCellSelectionChange: this.selectionChanged(event),
      primaryKey: "NameContainer",
      columns: [
        { key: "NameContainer", 
          headerText: "Container", 
          width: "10%", 
          dataType: "string" 
        },
        { key: "ShippingLine", 
          headerText: "S/L", 
          width: "8%", 
          dataType: "string" 
        },
        { key: "Status", 
          headerText: "Status", 
          width: "10%", 
          dataType: "string", 
        },
        { key: "ClosingDate", 
          headerText: "Closing Date", 
          width: "10%", 
          dataType: "date", 
          format: "dateLong" 
        }, 
        { key: "FreeTimeAtOrigin", 
          headerText: "Free Time At Origin", 
          width: "10%", 
          dataType: "string", 
        },  
        {
          key: "NumberOfDaysLeft", 
          headerText: "Days Left (adj)", 
          width: "10%", 
          dataType: "number",
          template: "{{if ${NumberOfDaysLeft} < 0  }}<div style='background-color: red'>${NumberOfDaysLeft}</div>{{else}}<div>${NumberOfDaysLeft}</div>{{/if}}" 
        },       
        { key: "BookingPU", 
          headerText: "Booking #", 
          width: "10%", 
          dataType: "string" 
        },
        { key: "Forwarder", 
          headerText: "Fowarding Agent", 
          width: "10%", 
          dataType: "string" 
        },       
        { key: "CanAccountManager",
          headerText: "(CAN) Account Mgr", 
          width: "13%", 
          dataType: "string" 
        },
        { key: "UsaAccountManager", 
          headerText: "(USA) Account Mgr", 
          width: "13%", 
          dataType: "string" 
        },
        { key: "InYard", 
          headerText: "Date in", 
          width: "10%", 
          dataType: "date" ,
          format: "dateLong" 
        }      
        
    ],
    features: [
      {
          name: "Updating",
          editMode: "none",
          enableAddRow: false,
          enableDeleteRow: false
      },
      {
        name: "Filtering",
        type: "local",
        persist: true
      },
      {
        name: "Sorting",
        type: "local",
        mode: "multi",
        sortingDialogContainment: "window"
      }, 
      {
      name: "Selection",
      mode: 'cell',
      multipleSelection: true,
      persist: true
      
    }   
  ]
    };
  }



  selectionChanged(event){
    // console.log(event);
  }
  
    onChange(id: number): void {
      //this.chosenTerminal = terminal;

      this._detentionManagerItemsSubscription = this._detentionManagerService.getDetentionManagerItems(id).subscribe(results => { 
          this.items = results;
           this.populate();
       });
      

    }
    

    
}

