import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Indentfl11aComponent } from './indentfl11a.component';

describe('Indentfl11aComponent', () => {
  let component: Indentfl11aComponent;
  let fixture: ComponentFixture<Indentfl11aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Indentfl11aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Indentfl11aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
