import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireEditDialogComponent } from './stagiaire-edit-dialog.component';

describe('StagiaireEditDialogComponent', () => {
  let component: StagiaireEditDialogComponent;
  let fixture: ComponentFixture<StagiaireEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagiaireEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagiaireEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
