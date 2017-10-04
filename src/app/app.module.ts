import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { DetentionManagerComponent } from './detention-manager/detention-manager.component';
import { DetentionManagerService } from './services/DetentionManagerService';
import { FooterComponent } from './footer/footer.component';
import { IgGridComponent } from "igniteui-angular2"
import { TopMenuComponent } from './top-menu/top-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    DetentionManagerComponent,
    IgGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  exports: [ ],
  providers: [DetentionManagerService],
  bootstrap: [AppComponent, TopMenuComponent, FooterComponent]
})
export class AppModule {

  constructor( sanitizer: DomSanitizer) {
    
  
  }
 }
