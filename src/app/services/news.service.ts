import { Injectable } from '@angular/core';
import { Article } from "../models/article";


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articles: Article[] = [
    {
      title: 'The Future of Renewable Energy',
      imageUrl: 'https://images.unsplash.com/photo-1502637098811-fa9526d2b659?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comments: [
        'Fascinating insights into solar and wind technologies!',
        'This article really highlights the potential of green energy',
        'Great overview of global renewable energy trends'
      ]
    },
    {
      title: 'Artificial Intelligence: Transforming Industries',
      imageUrl: 'https://images.unsplash.com/photo-1502637098811-fa9526d2b659?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comments: [
        'AI is changing everything from healthcare to manufacturing',
        'Incredible potential for solving complex global challenges',
        'Ethical considerations are crucial as AI advances'
      ]
    },
    {
      title: 'Urban Sustainability and Smart Cities',
      imageUrl: 'https://images.unsplash.com/photo-1502637098811-fa9526d2b659?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comments: [
        'Innovative urban planning is key to future development',
        'Love the examples of sustainable infrastructure',
        'Technology and urban design working hand in hand'
      ]
    },
    {
      title: 'Quantum Computing: The Next Technological Revolution',
      imageUrl: 'https://images.unsplash.com/photo-1502637098811-fa9526d2b659?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comments: [
        'Mind-blowing potential for solving complex computational problems',
        'Quantum mechanics meets computer science',
        'Exciting frontier of technological innovation'
      ]
    },
    {
      title: 'Climate Change: Global Challenges and Solutions',
      imageUrl: 'https://images.unsplash.com/photo-1502637098811-fa9526d2b659?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comments: [
        'Comprehensive overview of global environmental challenges',
        'Inspiring to see innovative solutions emerging',
        'We all have a role to play in addressing climate change'
      ]
    }
  ];

  constructor() {}

  getArticles(): Article[] {
    // Simulate fetching articles from an API
    return this.articles;
  }
}
