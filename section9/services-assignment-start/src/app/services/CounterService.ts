import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    
    activeToInactive: number = 0;
    inactiveToActive: number = 0;

    counter = new EventEmitter<any>();
}