import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class NavbarComponent {
  title = 'Defer Demo';
  navLinks = [
    { path: '/heavy', label: 'Heavy' },
    { path: '/defer', label: 'Defer' },
    { path: '/defer-placeholder', label: 'Defer with Placeholder' },
    { path: '/defer-viewport', label: 'Defer on Viewport' },
  ];
}
