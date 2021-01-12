import { TestBed } from '@angular/core/testing';

import { NgxFlowChartsService } from './ngx-flow-charts.service';

describe('NgxFlowChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFlowChartsService = TestBed.get(NgxFlowChartsService);
    expect(service).toBeTruthy();
  });
});
