import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from "../../models/article";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";


@Component({
  selector: 'app-article-hero',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],
  templateUrl: './article-hero.component.html',
  styleUrl: './article-hero.component.css'
})
export class ArticleHeroComponent implements OnInit{
  @Input()
  article!: Article;

  constructor() {}

  ngOnInit(): void {
    console.log('init article ' + this.article.title)
  }
}
