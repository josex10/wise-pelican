import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

/**
 * Import Models
 */
import { LinkButtonsModel } from '../../models/link-buttons.model';

/**
 * Import Components
 */
import { LinkButtonComponent } from './link-button.component';

describe('LinkButtonComponent', () => {
  let component: LinkButtonComponent;
  let fixture: ComponentFixture<LinkButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkButtonComponent);
    component = fixture.componentInstance;
    component.linkButtonModel = new LinkButtonsModel("Home", "landing-page");
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have correct @input values', async(() => {
    expect(component.linkButtonModel).toBeTruthy("Could not find buttons data");
    expect(component.linkButtonModel.label).toEqual("Home");
    expect(component.linkButtonModel.url).toEqual("landing-page");
  }));
});
