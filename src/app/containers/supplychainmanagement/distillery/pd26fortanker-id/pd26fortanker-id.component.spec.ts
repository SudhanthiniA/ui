import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26fortankerIdComponent } from './pd26fortanker-id.component';

describe('Pd26fortankerIdComponent', () => {
  let component: Pd26fortankerIdComponent;
  let fixture: ComponentFixture<Pd26fortankerIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26fortankerIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26fortankerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
