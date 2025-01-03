import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25fortankeridComponent } from './pd25fortankerid.component';

describe('Pd25fortankeridComponent', () => {
  let component: Pd25fortankeridComponent;
  let fixture: ComponentFixture<Pd25fortankeridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25fortankeridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25fortankeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
