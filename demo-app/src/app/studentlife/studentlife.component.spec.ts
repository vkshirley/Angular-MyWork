import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlifeComponent } from './studentlife.component';

describe('StudentlifeComponent', () => {
  let component: StudentlifeComponent;
  let fixture: ComponentFixture<StudentlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentlifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
