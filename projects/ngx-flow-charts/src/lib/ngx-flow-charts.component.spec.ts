import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlowChartsComponent } from './ngx-flow-charts.component';

describe('NgxFlowChartsComponent', () => {
  let component: NgxFlowChartsComponent;
  let fixture: ComponentFixture<NgxFlowChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlowChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlowChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
