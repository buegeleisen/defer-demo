import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from "./components/data-display/data-display.component";
import { HttpClient } from "@angular/common/http";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { NewsComponent } from "./components/news/news.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'defer-demo';
}
