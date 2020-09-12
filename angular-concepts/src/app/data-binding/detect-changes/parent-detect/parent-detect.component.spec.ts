import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDetectComponent } from './parent-detect.component';

describe('ParentDetectComponent', () => {
  let component: ParentDetectComponent;
  let fixture: ComponentFixture<ParentDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
