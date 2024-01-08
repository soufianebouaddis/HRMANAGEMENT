import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantEditDialogComponent } from './encadrant-edit-dialog.component';

describe('EncadrantEditDialogComponent', () => {
  let component: EncadrantEditDialogComponent;
  let fixture: ComponentFixture<EncadrantEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncadrantEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncadrantEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
