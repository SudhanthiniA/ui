import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancelindentafter72hrsComponent } from './cancelindentafter72hrs.component';

describe('Cancelindentafter72hrsComponent', () => {
  let component: Cancelindentafter72hrsComponent;
  let fixture: ComponentFixture<Cancelindentafter72hrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cancelindentafter72hrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cancelindentafter72hrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
