import { TestBed } from '@angular/core/testing';

import { OpenPixelControlService } from './open-pixel-control.service';

describe('OpenPixelControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenPixelControlService = TestBed.get(OpenPixelControlService);
    expect(service).toBeTruthy();
  });
});
