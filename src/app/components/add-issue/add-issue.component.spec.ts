import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIssueComponent } from './add-issue.component';

describe('AddIssueComponent', () => {
  let component: AddIssueComponent;
  let fixture: ComponentFixture<AddIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
