import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourofficersviewComponent } from './fourofficersview.component';

describe('FourofficersviewComponent', () => {
  let component: FourofficersviewComponent;
  let fixture: ComponentFixture<FourofficersviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourofficersviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourofficersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
