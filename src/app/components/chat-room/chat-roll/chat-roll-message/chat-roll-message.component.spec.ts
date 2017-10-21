import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRollMessageComponent } from './chat-roll-message.component';

describe('ChatRollMessageComponent', () => {
  let component: ChatRollMessageComponent;
  let fixture: ComponentFixture<ChatRollMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRollMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRollMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
