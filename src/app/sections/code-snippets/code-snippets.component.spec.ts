import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnippetsComponent } from './code-snippets.component';

describe('CodeSnippetsComponent', () => {
  let component: CodeSnippetsComponent;
  let fixture: ComponentFixture<CodeSnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeSnippetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
