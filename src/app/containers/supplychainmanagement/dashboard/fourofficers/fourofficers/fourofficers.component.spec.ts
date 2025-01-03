import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourofficersComponent } from './fourofficers.component';

describe('FourofficersComponent', () => {
  let component: FourofficersComponent;
  let fixture: ComponentFixture<FourofficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourofficersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourofficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
