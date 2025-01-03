import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb12formComponent } from './addb12form.component';

describe('Addb12formComponent', () => {
  let component: Addb12formComponent;
  let fixture: ComponentFixture<Addb12formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb12formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb12formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
