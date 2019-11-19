import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueInteractionsComponent } from './issue-interactions.component';

describe('IssueInteractionsComponent', () => {
  let component: IssueInteractionsComponent;
  let fixture: ComponentFixture<IssueInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
