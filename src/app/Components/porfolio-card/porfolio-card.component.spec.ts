import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioCardComponent } from './porfolio-card.component';

describe('PorfolioCardComponent', () => {
  let component: PorfolioCardComponent;
  let fixture: ComponentFixture<PorfolioCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorfolioCardComponent]
    });
    fixture = TestBed.createComponent(PorfolioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
