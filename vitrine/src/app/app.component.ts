import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Formation JS';
  patients:{"nom":string, "prenom":string}[] = [];

  ngOnInit(): void {
      this.logIn();
    }
  
  async logIn(){
    const app = new Realm.App({id:environment.projectID});
    const credentials = Realm.Credentials.anonymous();
    
    try {
      const user: Realm.User = await app.logIn(credentials);
      console.log(user);
      this.patients = await user.functions['getAllPatients']();
      console.log(this.patients);
      if(user.id === app.currentUser?.id)
      return user;
      else 
      return undefined;
    } catch(err) {
      console.error("Failed to log in", err);
      return undefined;
    } 
  }
}
