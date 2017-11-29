import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeschrijfschietingComponent } from './beschrijfschieting.component';

describe('BeschrijfschietingComponent', () => {
  let component: BeschrijfschietingComponent;
  let fixture: ComponentFixture<BeschrijfschietingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeschrijfschietingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeschrijfschietingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
