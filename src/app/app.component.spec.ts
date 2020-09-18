import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppPanelComponent } from './panel-component/panel.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppPanelComponent', () => {
  let fixture;
  let component;
  const testData = {
    name: 'All State',
    price: 123234234234,
    stars: 5,
    rate: 456.118888888,
    type: 3, // Buy Button
    action: {link: 'www.example.com'}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppPanelComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPanelComponent);
    component = fixture.componentInstance;
    component.data = testData;
    component.panelId = 3;

    fixture.detectChanges();
  });

  it('expect name to be displaying All State', () => {
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('#name-3');
    expect(title.textContent).toBe('All State');
  });

  it('expect getStars to return array with the length of 5', () => {
    const stars = component.getStars(5);
    expect(stars).toEqual(['x', 'x', 'x', 'x', 'x']);
  });

  it('expect getRate to return 456.12 and price to display', () => {
    const rate = component.getRate(component.data.rate);

    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('#price-3');

    expect(title.textContent).toBe('Verified Price $456.12 /mo');
    expect(rate).toEqual('456.12');
  });

  it('expect Buy button to show and click to call goTo', () => {
    spyOn(component, 'goTo');

    const btnEl: DebugElement = fixture.debugElement.query(By.css('#buy-btn-3'));
    const buyBtn = (btnEl.nativeElement as HTMLElement);
    buyBtn.dispatchEvent(new Event('click', {bubbles: true}));

    expect(component.goTo).toHaveBeenCalled();
  });

  it('expect Quote button to show and click to call goTo', () => {
    component.data.type = 1; // Quote button
    fixture.detectChanges();

    spyOn(component, 'goTo');

    const btnEl: DebugElement = fixture.debugElement.query(By.css('#quote-btn-3'));
    const buyBtn = (btnEl.nativeElement as HTMLElement);
    buyBtn.dispatchEvent(new Event('click', {bubbles: true}));

    expect(component.goTo).toHaveBeenCalled();
  });
});
