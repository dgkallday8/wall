import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('wall') public wall!: ElementRef;
  
  public rows: number[][] = [];
  public bricksInRow = 15;
  public randomRowsCount = Math.floor(Math.random() * 10) + 10;
  public width = 100;
  public height = 50;
  public dark!: ElementRef[];
  public light!: ElementRef[];
  public darkCount = 0;
  public lightCount = 0;

  constructor(private _cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.rows.push()

    for (let i = 0; i < this.randomRowsCount; i++) {
      const bricksColor = [];
      for (let j = 0; j < this.bricksInRow; j++) {
        const color = Math.random() > 0.5 ? 1 : 0;
        bricksColor.push(color)
      }
      this.rows.push(bricksColor);
    }
  }

  public ngAfterViewInit(): void {
    this.dark = this.wall.nativeElement.querySelectorAll('.dark');
    this.light = this.wall.nativeElement.querySelectorAll('.light');

  }

  public onSetSize(sizeForm: FormGroup): void {
    const { width, height } = sizeForm.value
    this.width = width;
    this.height = height;
    this._cdr.markForCheck();
  }
  
  public equalsIdx(i: number, j: number): boolean {
    return (j === 0 && i % 2 === 0) || (i % 2 !== 0 && j === this.bricksInRow - 1)
  }

  public getCounts(value: 'dark' | 'light'): void {
    console.log(value);
    
    if (value === 'dark') {
      this.darkCount = this.dark.length
    } else {
      this.lightCount = this.light.length
    }
  }

}
