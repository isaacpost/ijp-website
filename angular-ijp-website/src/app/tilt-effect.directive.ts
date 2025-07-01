import {
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
  NgZone
} from '@angular/core';

@Directive({
  selector: '[appTiltEffect]'
})
export class TiltEffectDirective implements OnDestroy {
  private pointerX = window.innerWidth / 2;
  private pointerY = window.innerHeight / 2;
  private animationFrameId: number | null = null;
  private pointerHasMoved = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {
    // Static shadow on load
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `0px 0px 10px rgba(0, 255, 0, 0.3)`
    );

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('mousemove', this.onPointerMove);
      window.addEventListener('touchmove', this.onPointerMove, { passive: true });
    });

    this.requestUpdate();
  }

  onPointerMove = (event: MouseEvent | TouchEvent) => {
    if (event instanceof MouseEvent) {
      this.pointerX = event.clientX;
      this.pointerY = event.clientY;
    } else if (event.touches && event.touches.length > 0) {
      this.pointerX = event.touches[0].clientX;
      this.pointerY = event.touches[0].clientY;
    }

    this.pointerHasMoved = true;
    this.requestUpdate();
  };

  requestUpdate() {
    if (this.animationFrameId === null) {
      this.animationFrameId = requestAnimationFrame(() => {
        this.updateTransformAndShadow();
        this.animationFrameId = null;
      });
    }
  }

  updateTransformAndShadow() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (this.pointerX - centerX) / (rect.width / 2);
    const offsetY = (this.pointerY - centerY) / (rect.height / 2);

    const clamp = (n: number) => Math.max(-1, Math.min(1, n));
    const clampedX = clamp(offsetX);
    const clampedY = clamp(offsetY);

    const rotateX = clampedY * 5;
    const rotateY = -clampedX * 5;

    const shadowX = clampedX * 10;
    const shadowY = clampedY * 10;

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );

    if (this.pointerHasMoved) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'box-shadow',
        `${shadowX}px ${shadowY}px 10px rgba(0, 255, 0, 0.4)`
      );
    }
  }

  ngOnDestroy() {
    window.removeEventListener('mousemove', this.onPointerMove);
    window.removeEventListener('touchmove', this.onPointerMove);
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
