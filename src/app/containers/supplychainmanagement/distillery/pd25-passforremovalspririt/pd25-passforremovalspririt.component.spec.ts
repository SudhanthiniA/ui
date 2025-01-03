import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25PassforremovalspriritComponent } from './pd25-passforremovalspririt.component';

describe('Pd25PassforremovalspriritComponent', () => {
  let component: Pd25PassforremovalspriritComponent;
  let fixture: ComponentFixture<Pd25PassforremovalspriritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25PassforremovalspriritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25PassforremovalspriritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
