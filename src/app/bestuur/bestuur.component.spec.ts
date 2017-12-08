import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestuurComponent } from './bestuur.component';

describe('BestuurComponent', () => {
  let component: BestuurComponent;
  let fixture: ComponentFixture<BestuurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestuurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestuurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
