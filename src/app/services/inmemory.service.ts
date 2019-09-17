import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDbServices implements InMemoryDbService {

    createDb(){
        let heros = [
            { id: 1, name: "Babu Arumugam"},
            { id: 2, name: "Tamil Selvan"},
            { id: 3, name: "kondan" },
            { id: 4, name: "kettain"}
        ];
        return {heros};
    }
    
}