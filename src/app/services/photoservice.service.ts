import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PhotoService {
    constructor(private http:HttpClient){}
    ngOnInit(){
        
        const redirect_uri = 'http://localhost:4200/home';
        const client_id = '2b77e98a6ea345a389a4a8bb61343731';
        
        //this.http.post('https://api.instagram.com/oauth/authorize/?client_id=2b77e98a6ea345a389a4a8bb61343731&redirect_uri=REDIRECT-URI&response_type=code',a,a)
    }
}


