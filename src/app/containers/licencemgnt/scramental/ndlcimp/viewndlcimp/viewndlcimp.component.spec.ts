import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewndlcimpComponent } from './viewndlcimp.component';

describe('ViewndlcimpComponent', () => {
  let component: ViewndlcimpComponent;
  let fixture: ComponentFixture<ViewndlcimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewndlcimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewndlcimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
