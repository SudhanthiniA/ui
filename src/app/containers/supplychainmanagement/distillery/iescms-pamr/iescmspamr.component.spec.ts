import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IescmspamrComponent } from './iescmspamr.component';

describe('IescmspamrComponent', () => {
  let component: IescmspamrComponent;
  let fixture: ComponentFixture<IescmspamrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IescmspamrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IescmspamrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
