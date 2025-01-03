import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwastageofbeerduringbottlingprocessComponent } from './viewwastageofbeerduringbottlingprocess.component';

describe('ViewwastageofbeerduringbottlingprocessComponent', () => {
  let component: ViewwastageofbeerduringbottlingprocessComponent;
  let fixture: ComponentFixture<ViewwastageofbeerduringbottlingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwastageofbeerduringbottlingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwastageofbeerduringbottlingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
