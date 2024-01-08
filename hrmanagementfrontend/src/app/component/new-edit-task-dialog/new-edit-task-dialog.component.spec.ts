import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditTaskDialogComponent } from './new-edit-task-dialog.component';

describe('NewEditTaskDialogComponent', () => {
  let component: NewEditTaskDialogComponent;
  let fixture: ComponentFixture<NewEditTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEditTaskDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEditTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
