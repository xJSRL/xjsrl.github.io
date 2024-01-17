import { TestBed } from '@angular/core/testing';

import { ProjectTimelineService } from './project-timeline.service';

describe('ProjectTimelineService', () => {
  let service: ProjectTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
