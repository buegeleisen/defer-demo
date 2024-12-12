import { Component } from '@angular/core';
import { HeavyComponent } from "../../heavy/heavy.component";

@Component({
  selector: 'app-defer-with-placeholder',
  standalone: true,
  imports: [
    HeavyComponent
  ],
  templateUrl: './defer-with-placeholder.component.html',
  styleUrl: './defer-with-placeholder.component.css'
})
export class DeferWithPlaceholderComponent {

}
