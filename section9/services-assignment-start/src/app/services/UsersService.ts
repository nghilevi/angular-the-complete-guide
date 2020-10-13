import { Injectable } from "@angular/core";
import { CounterService } from "./CounterService";

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    static activeUsers = ['Max', 'Anna'];
    static inactiveUsers = ['Chris', 'Manu'];
    
    constructor(private counterService: CounterService){};

    onSetToInactive(id: number) {
      UsersService.inactiveUsers.push(UsersService.activeUsers[id]);
      UsersService.activeUsers.splice(id, 1);
      this.emitCounter(1,0);
    }
  
    onSetToActive(id: number) {
      UsersService.activeUsers.push(UsersService.inactiveUsers[id]);
      UsersService.inactiveUsers.splice(id, 1);
      this.emitCounter(0,1);
    }

    emitCounter(activeToInactive, inactiveToActive){

        this.counterService.activeToInactive = this.counterService.activeToInactive+activeToInactive;
        this.counterService.inactiveToActive = this.counterService.inactiveToActive+inactiveToActive;
 
        this.counterService.counter.emit({
            activeToInactive: this.counterService.activeToInactive,
            inactiveToActive: this.counterService.inactiveToActive
        });
    }

}