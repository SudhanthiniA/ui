import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductiondeclarationComponent } from './viewproductiondeclaration.component';

describe('ViewproductiondeclarationComponent', () => {
  let component: ViewproductiondeclarationComponent;
  let fixture: ComponentFixture<ViewproductiondeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductiondeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductiondeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
