import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefermentationComponent } from './prefermentation.component';

describe('PrefermentationComponent', () => {
  let component: PrefermentationComponent;
  let fixture: ComponentFixture<PrefermentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefermentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefermentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
