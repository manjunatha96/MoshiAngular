import { Component } from '@angular/core';
import { RegisterService } from './Shared/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoshiAngular';
  constructor(private _service:RegisterService){}
}
