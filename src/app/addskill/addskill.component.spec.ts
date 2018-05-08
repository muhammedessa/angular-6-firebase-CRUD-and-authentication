import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddskillComponent } from './addskill.component';

describe('AddskillComponent', () => {
  let component: AddskillComponent;
  let fixture: ComponentFixture<AddskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
