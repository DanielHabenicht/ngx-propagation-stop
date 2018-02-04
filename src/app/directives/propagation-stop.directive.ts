import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[propagationStop]'
})
export class PropagationStopDirective {

  @HostListener('click', ['$event'])
    public onClick(event: any): void {
        event.stopPropagation();
    }
}
