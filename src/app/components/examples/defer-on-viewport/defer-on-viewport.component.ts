import { Component } from '@angular/core';
import { HeavyComponent } from "../../heavy/heavy.component";

@Component({
  selector: 'app-defer-on-viewport',
  standalone: true,
    imports: [
        HeavyComponent
    ],
  templateUrl: './defer-on-viewport.component.html',
  styleUrl: './defer-on-viewport.component.css'
})
export class DeferOnViewportComponent {

}
