import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecteTacheComponent } from './affecte-tache.component';

describe('AffecteTacheComponent', () => {
  let component: AffecteTacheComponent;
  let fixture: ComponentFixture<AffecteTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffecteTacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffecteTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
