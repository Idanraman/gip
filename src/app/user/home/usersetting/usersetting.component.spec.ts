import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersettingComponent } from './usersetting.component';

describe('UsersettingComponent', () => {
  let component: UsersettingComponent;
  let fixture: ComponentFixture<UsersettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
