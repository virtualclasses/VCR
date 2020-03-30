import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DassboardComponent } from './dassboard.component';

describe('DassboardComponent', () => {
  let component: DassboardComponent;
  let fixture: ComponentFixture<DassboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DassboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DassboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
