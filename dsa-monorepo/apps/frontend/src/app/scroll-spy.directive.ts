import {
  Directive,
  Injectable,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
    selector: '[scrollSpy]',
    standalone: false
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter < string > ();
  private currentSection: string;

  constructor(private _el: ElementRef) {
    console.log('directive is getting initialized')
    //   _el.nativeElement.onscroll(this.onScroll)
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let currentSection: string;
    const children = this._el.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - parentOffset) <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

}
