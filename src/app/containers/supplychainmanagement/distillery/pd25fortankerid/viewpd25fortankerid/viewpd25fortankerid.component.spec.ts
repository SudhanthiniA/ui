import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd25fortankeridComponent } from './viewpd25fortankerid.component';

describe('Viewpd25fortankeridComponent', () => {
  let component: Viewpd25fortankeridComponent;
  let fixture: ComponentFixture<Viewpd25fortankeridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd25fortankeridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd25fortankeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
