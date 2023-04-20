import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
 @Output() featureSelected = new EventEmitter<string>();



  onSelect(feature: string){
    this.featureSelected.emit(feature)



  }

}
