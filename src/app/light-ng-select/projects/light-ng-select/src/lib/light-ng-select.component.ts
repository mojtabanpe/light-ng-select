import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ChangeDetectorRef, IterableDiffers, DoCheck, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'light-ng-select',
  templateUrl: './light-ng-select.component.html',
  styleUrls: ['./light-ng-select.component.css']
})
export class LightNGSelectComponent implements OnChanges, DoCheck {
  @Input() keys: Array<any> = [];
  @Input() selectedKey: any;
  @Input() placeholder = 'choose';
  @Input() color = '#213d57';
  @Output() key = new EventEmitter();

  isOpen = false;
  iterableDiffer: any;

  @ViewChild('arrow') arrow: ElementRef<HTMLSpanElement> | undefined;
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {  
      this.isOpen = false;
    }
  }

  constructor(private eRef: ElementRef, private iterableDiffers: IterableDiffers, private cdrf: ChangeDetectorRef, private rendrer2: Renderer2) {
    this.iterableDiffer = iterableDiffers.find([]).create(undefined);
   }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['keys']) {
    //   if (this.keys.length !== 0) {
    //     this.selectedKey = this.keys[0];
    //   } 
    // }
    if (changes['color']) {
      if (this.arrow) {
        this.rendrer2.setStyle(this.arrow.nativeElement, "background-color", this.color);
      }
    }
  }
  ngDoCheck() {
    // let changes = this.iterableDiffer.diff(this.keys);    
    // if (changes) {
    //     this.keys = [].concat(changes.collection)
    //     if (this.keys.length !== 0) {
    //       this.selectedKey = this.keys[0];
    //     } 
    // }
}

  changeSelectedKey(item: any): void {
    this.selectedKey = item;
    this.isOpen = false;
    this.key.emit(item);
  }

  itemMouseEnter(item: any): void {
    if (item ) {
      item.style.backgroundColor = this.color;
    }
  }

  itemMouseOut(item: any): void {
    if (item ) {
      item.style.backgroundColor = 'unset';
    }
  }

}
