import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiraComponent } from './nira.component';

describe('NiraComponent', () => {
  let component: NiraComponent;
  let fixture: ComponentFixture<NiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
