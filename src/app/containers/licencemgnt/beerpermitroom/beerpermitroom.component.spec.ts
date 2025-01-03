import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerpermitroomComponent } from './beerpermitroom.component';

describe('BeerpermitroomComponent', () => {
  let component: BeerpermitroomComponent;
  let fixture: ComponentFixture<BeerpermitroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerpermitroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerpermitroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
