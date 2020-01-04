import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 loadedFeature = 'recipe';

 ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDTrtfPWi7k4Vh6NRXztWgxFBAbb8pQqU8",
      authDomain: "ng-recipe-book-36d54.firebaseapp.com"
    });
 }

  onNavigate(feature: string) {
   this.loadedFeature = feature;
 }
}
