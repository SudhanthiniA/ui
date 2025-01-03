import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastageofmolassesComponent } from './wastageofmolasses.component';

describe('WastageofmolassesComponent', () => {
  let component: WastageofmolassesComponent;
  let fixture: ComponentFixture<WastageofmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastageofmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastageofmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
