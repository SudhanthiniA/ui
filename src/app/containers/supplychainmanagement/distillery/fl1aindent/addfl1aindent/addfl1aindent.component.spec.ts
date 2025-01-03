import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl1aindentComponent } from './addfl1aindent.component';

describe('Addfl1aindentComponent', () => {
  let component: Addfl1aindentComponent;
  let fixture: ComponentFixture<Addfl1aindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl1aindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl1aindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
