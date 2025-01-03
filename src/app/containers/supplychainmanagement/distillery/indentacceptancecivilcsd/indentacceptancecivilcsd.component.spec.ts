import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentacceptancecivilcsdComponent } from './indentacceptancecivilcsd.component';

describe('IndentacceptancecivilcsdComponent', () => {
  let component: IndentacceptancecivilcsdComponent;
  let fixture: ComponentFixture<IndentacceptancecivilcsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentacceptancecivilcsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentacceptancecivilcsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
