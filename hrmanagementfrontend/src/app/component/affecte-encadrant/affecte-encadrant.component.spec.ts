import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecteEncadrantComponent } from './affecte-encadrant.component';

describe('AffecteEncadrantComponent', () => {
  let component: AffecteEncadrantComponent;
  let fixture: ComponentFixture<AffecteEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffecteEncadrantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffecteEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
