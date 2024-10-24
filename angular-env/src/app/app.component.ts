import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root', // Dieser Selektor wird in index.html verwendet
  imports: [HeaderComponent, NavigationComponent, FooterComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
