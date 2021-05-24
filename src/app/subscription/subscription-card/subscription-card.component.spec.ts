import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { SubscriptionCardComponent } from './subscription-card.component';

describe('SubscriptionCardComponent', () => {
  let component: SubscriptionCardComponent;
  let fixture: ComponentFixture<SubscriptionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionCardComponent ],
      imports : [ MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCardComponent);
    component = fixture.componentInstance;
    component.productModel = {
      "id": "prod_000",
      "name": "Silver",
      "features": [
        "Create Custom Facebook Audiences from Lists",
        "Receive a List of Rejected Addresses",
        "3 cents off per postcard",
        "25 free postcards per month"
      ],
      "plans": [
        {
          "id": "plan_000",
          "paymentInterval": "MONTH",
          "priceCents": "2900",
          "currency": "USD"
        },
        {
          "id": "plan_001",
          "paymentInterval": "YEAR",
          "priceCents": "27840",
          "currency": "USD"
        }
      ]
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
