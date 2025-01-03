import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanhitapptrackComponent } from './janhitapptrack.component';

describe('JanhitapptrackComponent', () => {
  let component: JanhitapptrackComponent;
  let fixture: ComponentFixture<JanhitapptrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanhitapptrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanhitapptrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
