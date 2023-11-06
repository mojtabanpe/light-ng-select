import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightNGSelectComponent } from './light-ng-select.component';

describe('AngularSelectComponent', () => {
  let component: LightNGSelectComponent;
  let fixture: ComponentFixture<LightNGSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightNGSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightNGSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
