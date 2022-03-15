import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigbarComponentComponent } from './configbar-component.component';

describe('ConfigbarComponentComponent', () => {
  let component: ConfigbarComponentComponent;
  let fixture: ComponentFixture<ConfigbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigbarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
