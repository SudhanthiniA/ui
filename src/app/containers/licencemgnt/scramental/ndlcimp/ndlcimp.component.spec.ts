import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdlcimpComponent } from './ndlcimp.component';

describe('NdlcimpComponent', () => {
  let component: NdlcimpComponent;
  let fixture: ComponentFixture<NdlcimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdlcimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdlcimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
