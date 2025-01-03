import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdstataddComponent } from './jdstatadd.component';

describe('JdstataddComponent', () => {
  let component: JdstataddComponent;
  let fixture: ComponentFixture<JdstataddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdstataddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdstataddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
