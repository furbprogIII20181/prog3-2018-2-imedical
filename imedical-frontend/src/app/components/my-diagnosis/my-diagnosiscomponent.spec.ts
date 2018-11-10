import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiagnosisComponent } from './my-diagnosis.component';

describe('MyDiagnosisComponent', () => {
  let component: MyDiagnosisComponent;
  let fixture: ComponentFixture<MyDiagnosisComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MyDiagnosisComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
