import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef , useValue:{} },
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be the correct API url', () => {
    expect(service.fnGetApiUrl()).toEqual('https://product-subscription.herokuapp.com/api');
  });
});
