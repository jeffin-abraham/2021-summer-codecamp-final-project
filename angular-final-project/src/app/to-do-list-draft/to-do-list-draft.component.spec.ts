import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDraftComponent } from './to-do-list-draft.component';

describe('ToDoListDraftComponent', () => {
  let component: ToDoListDraftComponent;
  let fixture: ComponentFixture<ToDoListDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
