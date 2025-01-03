import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsacramentalwinepermitComponent } from './viewsacramentalwinepermit.component';

describe('ViewsacramentalwinepermitComponent', () => {
  let component: ViewsacramentalwinepermitComponent;
  let fixture: ComponentFixture<ViewsacramentalwinepermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsacramentalwinepermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsacramentalwinepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
