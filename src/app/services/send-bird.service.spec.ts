import { TestBed, inject } from '@angular/core/testing';

import { SendBirdService } from './send-bird.service';

describe('SendBirdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendBirdService]
    });
  });

  it('should be created', inject([SendBirdService], (service: SendBirdService) => {
    expect(service).toBeTruthy();
  }));

  it('Should expose the sendbird api', inject([SendBirdService], (service: SendBirdService) => {
    expect(service.sb).toBeTruthy();
  }));

});
