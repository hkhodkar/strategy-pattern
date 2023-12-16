import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAllElementComponent } from './demo-all-element.component';

describe('DemoAllElementComponent', () => {
  let component: DemoAllElementComponent;
  let fixture: ComponentFixture<DemoAllElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAllElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoAllElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
