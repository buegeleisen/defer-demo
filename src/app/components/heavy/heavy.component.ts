import { Component, OnInit } from '@angular/core';
import { timer } from "rxjs";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-heavy',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './heavy.component.html',
  styleUrl: './heavy.component.css'
})
export class HeavyComponent implements OnInit {
  protected ready: boolean = true;
  ngOnInit(): void {
    this.simulateHeavyLoading();
  }

  simulateHeavyLoading(): void {
    timer(2500).subscribe(() => {
      this.ready = true;
    });
  }
}
