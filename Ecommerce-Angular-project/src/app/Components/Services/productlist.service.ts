import { IProduct } from './../Model/IProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  products: IProduct[]=[];
}
