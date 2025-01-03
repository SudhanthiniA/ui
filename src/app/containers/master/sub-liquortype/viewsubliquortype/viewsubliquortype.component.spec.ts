import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubliquortypeComponent } from './viewsubliquortype.component';

describe('ViewsubliquortypeComponent', () => {
  let component: ViewsubliquortypeComponent;
  let fixture: ComponentFixture<ViewsubliquortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubliquortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubliquortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
