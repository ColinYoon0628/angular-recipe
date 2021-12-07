import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    collapsed: boolean = true;
    @Output() featureSelected = new EventEmitter<string>();
    onSelect(feature:string) {
        this.featureSelected.emit(feature);
    }
}