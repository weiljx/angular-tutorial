import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[onEnter]'
})
export class OnEnterDirective {

  @Output()
  onEnter: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('keydown.enter', ['$event'])
  onEnterKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    this.onEnter.emit();
  }
}
