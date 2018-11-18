import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReplyViewComponent } from './doctor-reply-view.component';

describe('DoctorReplyViewComponent', () => {
  let component: DoctorReplyViewComponent;
  let fixture: ComponentFixture<DoctorReplyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorReplyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorReplyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
