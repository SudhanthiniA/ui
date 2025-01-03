import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl1aindentComponent } from './fl1aindent.component';

describe('Fl1aindentComponent', () => {
  let component: Fl1aindentComponent;
  let fixture: ComponentFixture<Fl1aindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl1aindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl1aindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
