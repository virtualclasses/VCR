import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpsupportComponent } from './helpsupport.component';

describe('HelpsupportComponent', () => {
  let component: HelpsupportComponent;
  let fixture: ComponentFixture<HelpsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
