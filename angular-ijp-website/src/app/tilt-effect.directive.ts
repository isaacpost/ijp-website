import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appTiltEffect]'
})
export class TiltEffectDirective {

  private proximityDistance = 500; // range in pixels

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // Smooth transitions
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'box-shadow 0.1s linear'
    );

    // Start with no shadow
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      '0px 0px 0px rgba(0,0,0,0)'
    );
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const rect = this.el.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    // Normalize distance (0 at center → 1 at edge of range)
    const normalized = Math.min(distance / this.proximityDistance, 1);

    // Invert so 1 = strongest when close
    const strength = 1 - normalized;

    // Fully gradual scaling
    const shadowOffset = strength * 30;
    const blur = strength * 60;
    const opacity = strength * 0.9;

    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `0px ${shadowOffset}px ${blur}px rgba(0,0,0,${opacity})`
    );
  }
}