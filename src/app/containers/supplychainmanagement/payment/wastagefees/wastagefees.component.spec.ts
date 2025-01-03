import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastagefeesComponent } from './wastagefees.component';

describe('WastagefeesComponent', () => {
  let component: WastagefeesComponent;
  let fixture: ComponentFixture<WastagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
