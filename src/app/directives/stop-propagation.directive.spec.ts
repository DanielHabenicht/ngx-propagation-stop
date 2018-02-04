import { StopPropagationDirective } from './stop-propagation.directive';

describe('StopPropagationDirective', () => {
  it('should create an instance', () => {
    const directive = new StopPropagationDirective();
    expect(directive).toBeTruthy();
  });
  // it('should stop Event Propagation', () => {
  //   const directive = new StopPropagationDirective();
  //   const event = new Event('');

  //   event.stop
  //   expect(directive.onClick())
  // })
});

// class ExtendedEvent extends Event {
//   this.stopPropagation = function() {
//       this.isPropagationStopped = true;
//       overriddenStop.apply(this, arguments);
//   };
// }