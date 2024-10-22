import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { ApiService } from "../../services/api.service";
import { ProductData } from "../../models/product-data.model";


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {
  data: Product[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    await this.delay(3000)
    this.apiService.getData().subscribe( (data: Product[]) => {
      console.log('init');
      this.data = data;
      console.log(data);
    });
  }

  private delay(ms: number) {
    new Promise(res => setTimeout(res, ms))
  };
}
