import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user-service.service";



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcome!: string

  // constructor(private service: UserService) { }

  ngOnInit(): void {
    // this.welcome = this.service.isLoggedIn ?
    //   'Welcome' + this.service.user.name : 'Please log in.';
  }

}
