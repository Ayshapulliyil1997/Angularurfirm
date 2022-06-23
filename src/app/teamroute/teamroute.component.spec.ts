import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamrouteComponent } from './teamroute.component';

describe('TeamrouteComponent', () => {
  let component: TeamrouteComponent;
  let fixture: ComponentFixture<TeamrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
