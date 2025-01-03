import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl1aindentComponent } from './viewfl1aindent.component';

describe('Viewfl1aindentComponent', () => {
  let component: Viewfl1aindentComponent;
  let fixture: ComponentFixture<Viewfl1aindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl1aindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl1aindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
