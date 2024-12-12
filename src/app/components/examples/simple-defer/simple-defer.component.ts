import { Component } from '@angular/core';
import { HeavyComponent } from "../../heavy/heavy.component";

@Component({
  selector: 'app-simple-defer',
  standalone: true,
  imports: [
    HeavyComponent
  ],
  templateUrl: './simple-defer.component.html',
  styleUrl: './simple-defer.component.css'
})
export class SimpleDeferComponent {

}
