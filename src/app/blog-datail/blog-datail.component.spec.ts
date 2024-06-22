import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDatailComponent } from './blog-datail.component';

describe('BlogDatailComponent', () => {
  let component: BlogDatailComponent;
  let fixture: ComponentFixture<BlogDatailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDatailComponent]
    });
    fixture = TestBed.createComponent(BlogDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
