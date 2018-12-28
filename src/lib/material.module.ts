import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [MatIconModule, MatMenuModule, ScrollDispatchModule],
  exports: [MatIconModule, MatMenuModule, ScrollDispatchModule]
})
export class MaterialModule {}
