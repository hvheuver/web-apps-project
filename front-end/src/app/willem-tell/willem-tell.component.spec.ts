import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillemTellComponent } from './willem-tell.component';

describe('WillemTellComponent', () => {
  let component: WillemTellComponent;
  let fixture: ComponentFixture<WillemTellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillemTellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillemTellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
