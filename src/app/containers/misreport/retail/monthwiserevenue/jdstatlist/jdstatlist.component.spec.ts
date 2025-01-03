import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdstatlistComponent } from './jdstatlist.component';

describe('JdstatlistComponent', () => {
  let component: JdstatlistComponent;
  let fixture: ComponentFixture<JdstatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdstatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdstatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
