import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	@Input() isThemeDark: boolean = false;
	@Output('toggleTheme') toggleTheme: EventEmitter<any> = new EventEmitter();

	@ViewChild('info') info!: ElementRef<any>;

	isIconCurrent(isIconDark: boolean): string {
		return isIconDark == this.isThemeDark ? 'current' : '';
	}

	showInfo() {
		this.info.nativeElement.classList.toggle('visible');
	}

	constructor() { }

	ngOnInit(): void {
	}

}
