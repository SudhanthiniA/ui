import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentmetallurgyandfoundryindustriesComponent } from './indentmetallurgyandfoundryindustries.component';

describe('IndentmetallurgyandfoundryindustriesComponent', () => {
  let component: IndentmetallurgyandfoundryindustriesComponent;
  let fixture: ComponentFixture<IndentmetallurgyandfoundryindustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentmetallurgyandfoundryindustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentmetallurgyandfoundryindustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
