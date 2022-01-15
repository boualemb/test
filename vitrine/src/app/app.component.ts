import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";
import { environment } from '../environments/environment';
import { DBManagerService } from './services/dbManager/dbmanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Formation JS';
  patients: { "nom": string, "prenom": string }[] = [];

  constructor( private dbManager:DBManagerService ){}

  ngOnInit(): void {

    this.dbManager.logIn().
    then(()=>{
      this.dbManager.loadData().
      then(()=>{
        this.patients = this.dbManager.getAllPatients();
      });      
    });

    
  }


}
