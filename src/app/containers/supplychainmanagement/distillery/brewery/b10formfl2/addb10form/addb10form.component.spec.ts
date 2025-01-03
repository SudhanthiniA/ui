import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb10formComponent } from './addb10form.component';

describe('Addb10formComponent', () => {
  let component: Addb10formComponent;
  let fixture: ComponentFixture<Addb10formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb10formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb10formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
