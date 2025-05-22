import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  step = 0;

  @Input() images!: string[];

  private intervalId: any;
  private startX = 0;
  private isDragging = false;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextStep(), 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  resetTimer(): void {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.nextStep(), 4000);
  }
  
  nextStep(): void {
    this.step = (this.step + 1) % this.images.length;
    this.resetTimer();
  }

  prevStep(): void {
    this.step = (this.step - 1 + this.images.length) % this.images.length;
    this.resetTimer();
  }

  onDragStart(event: MouseEvent | TouchEvent): void {
    this.isDragging = true;
    this.startX = 'touches' in event ? event.touches[0].clientX : event.clientX;
  }

  onDragEnd(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    const endX = 'changedTouches' in event ? event.changedTouches[0].clientX : event.clientX;
    const deltaX = endX - this.startX;
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? this.prevStep() : this.nextStep();
    }
  }

  getTransform(): string {
    const angle = 360 / this.images.length;
    return `rotateY(${-this.step * angle}deg)`;
  }

  getFaceTransform(index: number): string {
    const angle = 360 / this.images.length;
    return `rotateY(${index * angle}deg) translateZ(500px)`;
  }
}
