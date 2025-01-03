import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb11formComponent } from './addb11form.component';

describe('Addb11formComponent', () => {
  let component: Addb11formComponent;
  let fixture: ComponentFixture<Addb11formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb11formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb11formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
