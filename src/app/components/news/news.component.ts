import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from '../article/article.component';
import { Article } from "../../models/article";
import { NewsService } from "../../services/news.service";


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.articles = this.newsService.getArticles();
  }
}
