import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ChangeDetectorRef, IterableDiffers, DoCheck } from '@angular/core';

@Component({
  selector: 'light-ng-select',
  templateUrl: './light-ng-select.component.html',
  styleUrls: ['./light-ng-select.component.css']
})
export class LightNGSelectComponent implements OnChanges, DoCheck {
  @Input() keys: Array<any> = [];
  @Input() selectedKey: any;
  @Input() test = '';
  @Output() key = new EventEmitter();
  isOpen = false;
  iterableDiffer: any;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {  
      this.isOpen = false;
    }
  }

  constructor(private eRef: ElementRef, private iterableDiffers: IterableDiffers, private cdrf: ChangeDetectorRef) {
    this.iterableDiffer = iterableDiffers.find([]).create(undefined);
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['keys']) {
      if (this.keys.length !== 0) {
        this.selectedKey = this.keys[0];
      } 
    }
  }
  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.keys);    
    if (changes) {
        this.keys = [].concat(changes.collection)
        if (this.keys.length !== 0) {
          this.selectedKey = this.keys[0];
        } 
    }
}

  changeSelectedKey(item: any): void {
    this.selectedKey = item;
    this.isOpen = false;
    this.key.emit(item);
  }

}
