import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibraryComponentComponent } from './angular-library-component.component';

describe('AngularLibraryComponentComponent', () => {
  let component: AngularLibraryComponentComponent;
  let fixture: ComponentFixture<AngularLibraryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLibraryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLibraryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
