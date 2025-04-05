import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})


export class LoggerService {
    constructor() {

    }


    logMessage() {
        console.log('this is a message from another service');
    }
}