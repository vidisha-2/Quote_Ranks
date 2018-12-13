import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowquotesComponent } from './showquotes.component';

describe('ShowquotesComponent', () => {
  let component: ShowquotesComponent;
  let fixture: ComponentFixture<ShowquotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowquotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
