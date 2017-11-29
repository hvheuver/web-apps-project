import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaandeWipComponent } from './staande-wip.component';

describe('StaandeWipComponent', () => {
  let component: StaandeWipComponent;
  let fixture: ComponentFixture<StaandeWipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaandeWipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaandeWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
