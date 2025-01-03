import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScramentalComponent } from './scramental.component';

describe('ScramentalComponent', () => {
  let component: ScramentalComponent;
  let fixture: ComponentFixture<ScramentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScramentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScramentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
