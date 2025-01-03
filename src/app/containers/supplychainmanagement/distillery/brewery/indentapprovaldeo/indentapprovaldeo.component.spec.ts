import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentapprovaldeoComponent } from './indentapprovaldeo.component';

describe('IndentapprovaldeoComponent', () => {
  let component: IndentapprovaldeoComponent;
  let fixture: ComponentFixture<IndentapprovaldeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentapprovaldeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentapprovaldeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
