import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreserviceComponent } from './moreservice.component';

describe('MoreserviceComponent', () => {
  let component: MoreserviceComponent;
  let fixture: ComponentFixture<MoreserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
