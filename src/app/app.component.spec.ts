import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Function innerClicked() should set innerClick to true', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.innerClicked();
    expect(fixture.componentInstance.innerClick).toBeTruthy();
  }));

  it('Function outerClicked() should set outerClick to true', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.outerClicked();
    expect(fixture.componentInstance.outerClick).toBeTruthy();
  }));

  it('Function reset() should reset clicks', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.reset();
    expect(fixture.componentInstance.outerClick || fixture.componentInstance.innerClick ).toBeFalsy();
  }));
});
