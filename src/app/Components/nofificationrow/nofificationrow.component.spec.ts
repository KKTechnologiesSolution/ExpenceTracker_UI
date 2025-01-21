import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofificationrowComponent } from './nofificationrow.component';

describe('NofificationrowComponent', () => {
  let component: NofificationrowComponent;
  let fixture: ComponentFixture<NofificationrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NofificationrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NofificationrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
