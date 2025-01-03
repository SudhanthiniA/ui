import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd25fortankeridComponent } from './addpd25fortankerid.component';

describe('Addpd25fortankeridComponent', () => {
  let component: Addpd25fortankeridComponent;
  let fixture: ComponentFixture<Addpd25fortankeridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd25fortankeridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd25fortankeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
