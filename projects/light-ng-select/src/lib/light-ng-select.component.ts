import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'light-ng-select',
  templateUrl: './light-ng-select.component.html',
  styleUrls: ['./light-ng-select.component.css']
})
export class LightNGSelectComponent implements OnInit {
  @Input() keys: Array<any> = [];
  @Input() selectedKey: any;
  @Output() key = new EventEmitter();
  isOpen = false;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {  
      this.isOpen = false;
    }
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    if(!this.selectedKey) {
      this.selectedKey = this.keys[0];
    }
  }

  changeSelectedKey(item: any): void {
    this.selectedKey = item;
    this.isOpen = false;
    this.key.emit(item);
  }

}
