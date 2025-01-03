import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalutationComponent } from './viewsalutation.component';

describe('ViewsalutationComponent', () => {
  let component: ViewsalutationComponent;
  let fixture: ComponentFixture<ViewsalutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsalutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsalutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
