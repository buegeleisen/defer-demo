import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from '../article/article.component';
import { Article } from "../../models/article";
import { NewsService } from "../../services/news.service";
import { ArticleHeroComponent } from "../article-hero/article-hero.component";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ArticleComponent, ArticleHeroComponent, LoadingSpinnerComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];
  viewPortArticle: any = null;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.articles = this.newsService.getArticles();
    this.viewPortArticle = this.newsService.getViewPortArticle();
  }
}
