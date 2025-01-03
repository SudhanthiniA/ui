import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationtrackvehicleComponent } from './violationtrackvehicle.component';

describe('ViolationtrackvehicleComponent', () => {
  let component: ViolationtrackvehicleComponent;
  let fixture: ComponentFixture<ViolationtrackvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolationtrackvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationtrackvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
