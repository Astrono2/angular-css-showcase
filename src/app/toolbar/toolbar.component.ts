import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	@Input() isThemeDark: boolean = false;
	@Output('toggleTheme') toggleTheme: EventEmitter<any> = new EventEmitter();

	isIconCurrent(isIconDark: boolean): string {
		return isIconDark == this.isThemeDark ? 'current' : '';
	}

	constructor() { }

	ngOnInit(): void {
	}

}
