import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalaccountnComponent } from './personalaccountn.component';

describe('PersonalaccountnComponent', () => {
  let component: PersonalaccountnComponent;
  let fixture: ComponentFixture<PersonalaccountnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalaccountnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalaccountnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
