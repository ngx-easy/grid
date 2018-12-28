import { Component, HostBinding, ElementRef, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { EasyGridService } from './../services/easy-grid.service';
import { EasyVirtualScrollComponent } from '@ngx-easy/virtual-scroll';
import { ScrollIndex, ScrollEvent, ScrollType } from '@ngx-easy/virtual-scroll';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ez-grid-table',
  templateUrl: './easy-grid-table.component.html',
  styleUrls: ['./easy-grid-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EasyGridTableComponent implements OnInit {

  constructor(private elementRef: ElementRef, public gridService: EasyGridService) { }

  ngOnInit() {
    this.gridService.hasScrollBar = !this.gridService.isMobile &&
      (this.gridService.data.length * this.gridService.rowHeight >= this.elementRef.nativeElement.offsetHeight);
  }

  onScroll(event: ScrollEvent) {
    switch (event.type) {
      case ScrollType.Vertical:
        this.gridService.index = event.index;
        break;
      case ScrollType.Horizontal:
        this.gridService.horizontalScrollEvent.emit(event.scrollLeft);
        break;
    }
  }
}
