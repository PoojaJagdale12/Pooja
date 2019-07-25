import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicinghistoryComponent } from './servicinghistory.component';

describe('ServicinghistoryComponent', () => {
  let component: ServicinghistoryComponent;
  let fixture: ComponentFixture<ServicinghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicinghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
