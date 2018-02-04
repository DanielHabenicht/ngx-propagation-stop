import { StopPropagationDirective } from './stop-propagation.directive';

describe('StopPropagationDirective', () => {
  it('should create an instance', () => {
    const directive = new StopPropagationDirective();
    expect(directive).toBeTruthy();
  });
  it('should stop Event Propagation', () => {
    const directive = new StopPropagationDirective();
    const event = new Event('');
    const overriddenStop =  Event.prototype.stopPropagation;
    Event.prototype.stopPropagation = function() {
        this.isPropagationStopped = true;
        overriddenStop.apply(this, arguments);
    };

    directive.onClick(event);

    expect(event.isPropagationStopped).toBeTruthy();

  });
});

class ExtendedEvent extends Event {

  public 
  constructor(typeArg: string, eventInitDict?: EventInit) {
    super(typeArg, eventInitDict);
  }

  public stopPropagation() {
      this.isPropagationStopped = true;
      super.stopPropagation();
  };
}