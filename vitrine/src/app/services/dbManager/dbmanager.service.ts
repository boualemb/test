import { Injectable } from '@angular/core';
import * as Realm from"realm-web";

@Injectable({
  providedIn: 'root'
})
export class DBManagerService {
  private patients: { "nom": string, "prenom": string }[] = [];
  private interventions: {"nomInterventions": string, "prix": number}[] = [];

  app: Realm.App;
  user!: Realm.User;

  constructor() {
    this.app = new Realm.App({ id: "medapp-ssbxq" });
   }

  async logIn() {
    
    const credentials = Realm.Credentials.anonymous();
    try {
      this.user = await this.app.logIn(credentials);
      if (this.user.id === this.app.currentUser?.id)
        return this.user;
      else
        return undefined;
    } catch (err) {
      console.error("Failed to log in", err);
      return undefined;
    }
  }
  async loadData(){
    if (!this.user) return;
    this.patients = await this.user.functions['getAllPatients']();
    this.interventions = await this.user.functions['getAllInterventions']();
  }
  getAllPatients(){
    return this.patients;
  }

  getAllInterventions(){
    return this.interventions;
  }

}
