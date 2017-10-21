import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[tafullstackScrollable]'
})
export class ScrollableDirective {

  /** if the user is currently at the bottom of the region */
  private _userBottom = true;

  /** event triggered when the scrollable region reaches the top */
  @Output()
  public onTop = new EventEmitter();


  @HostListener("scroll")
  public onScroll(event) {
    const scrollPercent = (this._el.scrollTop + this._el.offsetHeight) / this._el.scrollHeight * 100;

    if(scrollPercent >= 99) this._userBottom = true;
    else this._userBottom = false;
  }

  /**
   * sticks to the bottom if the user hasn't scrolled on its own.
   */
  public scrollToBottomIfNotUp() {
    if(this._userBottom) {
      setTimeout(() => this._el.scrollBy(0, this._el.scrollHeight));
    }
  }

  private get _el(): HTMLElement { return this._elRef.nativeElement; }

  constructor(protected _elRef: ElementRef) { }

}
