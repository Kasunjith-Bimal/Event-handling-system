import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredetaileventComponent } from './moredetailevent.component';

describe('MoredetaileventComponent', () => {
  let component: MoredetaileventComponent;
  let fixture: ComponentFixture<MoredetaileventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoredetaileventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredetaileventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
