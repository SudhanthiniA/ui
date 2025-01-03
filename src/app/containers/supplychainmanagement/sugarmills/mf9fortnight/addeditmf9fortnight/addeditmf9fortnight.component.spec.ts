import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditmf9fortnightComponent } from './addeditmf9fortnight.component';

describe('Addeditmf9fortnightComponent', () => {
  let component: Addeditmf9fortnightComponent;
  let fixture: ComponentFixture<Addeditmf9fortnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditmf9fortnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditmf9fortnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
