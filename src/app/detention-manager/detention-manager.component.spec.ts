import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetentionManagerComponent } from './detention-manager.component';

describe('DetentionManagerComponent', () => {
  let component: DetentionManagerComponent;
  let fixture: ComponentFixture<DetentionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetentionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetentionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
