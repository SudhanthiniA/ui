import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacramentalwinepermitComponent } from './sacramentalwinepermit.component';

describe('SacramentalwinepermitComponent', () => {
  let component: SacramentalwinepermitComponent;
  let fixture: ComponentFixture<SacramentalwinepermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacramentalwinepermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacramentalwinepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
