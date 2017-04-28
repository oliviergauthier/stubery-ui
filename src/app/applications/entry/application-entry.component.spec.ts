import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationEntryComponent } from './application-entry.component';

describe('ApplicationEntryComponent', () => {
  let component: ApplicationEntryComponent;
  let fixture: ComponentFixture<ApplicationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
