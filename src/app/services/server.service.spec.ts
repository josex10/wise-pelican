import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductModel } from '../models/product.model';

import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;
  // let products: ProductModel[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule],
    });
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should retreive all products',(done: DoneFn)=>{
    var groupOfProducts: ProductModel[] = [];
    service.fnGetAllProducts().subscribe(products=>{
      groupOfProducts = products;
      expect(groupOfProducts).toBeTruthy("No products returned");
      expect(groupOfProducts.length).toBe(4, "Incorrect number of courses");
      const product = groupOfProducts.find(product=>product.id = "prod_000");
      expect(product.name).toBe("Silver");
      done();
    });
  
  });
});
