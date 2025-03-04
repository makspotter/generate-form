import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[iqButtonClick]',
  host: {
    role: 'button',
  },
})
export class ButtonClickDirective {
  @HostBinding('class.disabled')
  @Input()
  isDisabled = false;

  @Output() hostClick: EventEmitter<Event> = new EventEmitter<Event>();

  @HostListener('click', ['$event'])
  @HostListener('keydown.enter', ['$event'])
  @HostListener('keydown.space', ['$event'])
  @HostListener('keydown.spacebar', ['$event'])
  onHostClick($event: Event): void {
    this.hostClick.emit($event);
  }
}
