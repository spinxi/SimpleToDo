
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { AdditionComponent } from '../components/addition/addition.component';
import { ListComponent } from '../components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, //Routers
    //Components
    HeaderComponent,
    AdditionComponent,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpleToDo';
}
