import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockinformationComponent } from './blockinformation.component';

describe('BlockinformationComponent', () => {
  let component: BlockinformationComponent;
  let fixture: ComponentFixture<BlockinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
