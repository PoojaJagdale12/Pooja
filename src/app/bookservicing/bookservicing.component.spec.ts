import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookservicingComponent } from './bookservicing.component';

describe('BookservicingComponent', () => {
  let component: BookservicingComponent;
  let fixture: ComponentFixture<BookservicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookservicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookservicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
