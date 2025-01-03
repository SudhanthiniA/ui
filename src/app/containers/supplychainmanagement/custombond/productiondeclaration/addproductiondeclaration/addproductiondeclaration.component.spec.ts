import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductiondeclarationComponent } from './addproductiondeclaration.component';

describe('AddproductiondeclarationComponent', () => {
  let component: AddproductiondeclarationComponent;
  let fixture: ComponentFixture<AddproductiondeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductiondeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductiondeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
