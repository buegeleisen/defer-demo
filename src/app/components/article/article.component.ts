import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from "../../models/article";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  @Input()
  article!: Article;

  constructor() {}

  ngOnInit(): void {
    console.log('init article ' + this.article.title)
  }
}
