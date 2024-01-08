import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantComponent } from './encadrant.component';

describe('EncadrantComponent', () => {
  let component: EncadrantComponent;
  let fixture: ComponentFixture<EncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncadrantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
