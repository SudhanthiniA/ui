import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewretailshoptypeComponent } from './viewretailshoptype.component';

describe('ViewretailshoptypeComponent', () => {
  let component: ViewretailshoptypeComponent;
  let fixture: ComponentFixture<ViewretailshoptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewretailshoptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewretailshoptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
