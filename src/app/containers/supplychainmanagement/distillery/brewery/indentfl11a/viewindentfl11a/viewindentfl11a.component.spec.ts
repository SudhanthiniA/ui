import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewindentfl11aComponent } from './viewindentfl11a.component';

describe('Viewindentfl11aComponent', () => {
  let component: Viewindentfl11aComponent;
  let fixture: ComponentFixture<Viewindentfl11aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewindentfl11aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewindentfl11aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
