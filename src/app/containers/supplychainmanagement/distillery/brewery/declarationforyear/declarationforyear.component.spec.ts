import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationforyearComponent } from './declarationforyear.component';

describe('DeclarationforyearComponent', () => {
  let component: DeclarationforyearComponent;
  let fixture: ComponentFixture<DeclarationforyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationforyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationforyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
