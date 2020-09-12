import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDetectComponent } from './child-detect.component';

describe('ChildDetectComponent', () => {
  let component: ChildDetectComponent;
  let fixture: ComponentFixture<ChildDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
