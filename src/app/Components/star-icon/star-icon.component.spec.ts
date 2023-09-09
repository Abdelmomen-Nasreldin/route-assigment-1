import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarIconComponent } from './star-icon.component';

describe('StarIconComponent', () => {
  let component: StarIconComponent;
  let fixture: ComponentFixture<StarIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarIconComponent]
    });
    fixture = TestBed.createComponent(StarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
