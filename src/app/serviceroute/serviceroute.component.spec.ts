import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerouteComponent } from './serviceroute.component';

describe('ServicerouteComponent', () => {
  let component: ServicerouteComponent;
  let fixture: ComponentFixture<ServicerouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicerouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
