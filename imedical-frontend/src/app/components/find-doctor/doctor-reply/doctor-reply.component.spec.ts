import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReplyComponent } from './doctor-reply.component';

describe('DoctorReplyComponent', () => {
  let component: DoctorReplyComponent;
  let fixture: ComponentFixture<DoctorReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
