import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/**
 * Import Models
 */
import { LinkButtonsModel } from '../../models/link-buttons.model';

/**
 * Import Components
 */
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have buttons data', () => {
    component.groupOfLinkButtons.push(new LinkButtonsModel("Home", "landing-page"));
    expect(component.groupOfLinkButtons.length).toBeGreaterThan(0, "No button's data was received");
  });

  it('should display buttons correctly', async(() => {
    de = fixture.debugElement.query(By.css('.link-button'));
    expect(de).toBeTruthy();
  }));
});
