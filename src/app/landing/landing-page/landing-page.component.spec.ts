import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * Import Components
 */
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct main message', () => {
    component.mainMessage = "Welcome to the Product Subscription Application";
    expect(component.mainMessage).toEqual("Welcome to the Product Subscription Application");
  });
});
