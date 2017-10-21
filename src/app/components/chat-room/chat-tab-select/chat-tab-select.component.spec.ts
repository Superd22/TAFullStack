import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTabSelectComponent } from './chat-tab-select.component';

describe('ChatTabSelectComponent', () => {
  let component: ChatTabSelectComponent;
  let fixture: ComponentFixture<ChatTabSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTabSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTabSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
