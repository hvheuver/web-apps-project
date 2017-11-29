import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntenschietingComponent } from './puntenschieting.component';

describe('PuntenschietingComponent', () => {
  let component: PuntenschietingComponent;
  let fixture: ComponentFixture<PuntenschietingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntenschietingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntenschietingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
