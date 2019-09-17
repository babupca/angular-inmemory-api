import { Component, OnInit } from '@angular/core';
import { InMemoryDbServices } from './../services/inmemory.service';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [InMemoryDbServices]
})
export class HomeComponent implements OnInit {

myVar:any;
  constructor(private myService:InMemoryDbService) { }

  ngOnInit(){
    this.myVar = this.myService.createDb();
    console.log(this.myVar);
  }

}
