import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from  'rxjs/operators';

import { CommonService } from './common.service';

import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient, private commonService:CommonService) { }

  /**
  * @Name fnGetAllProducts
  * @Paramater N/A
  * @Description Function to get all products from the API
  * @Return Array of Products
  */
  public fnGetAllProducts(): Observable<ProductModel[]>{
    const apiUrl = this.commonService.fnGetApiUrl();
    return this.http.get<any>( `${apiUrl}/products`).pipe(map(resp=>{
      return resp.products;
    }));
  }
}
