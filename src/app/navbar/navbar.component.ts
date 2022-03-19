import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	@Input() sections: Array<string> = [];
	@Input() currentSection: string = '';
	@Output('changeSection') changeSection: EventEmitter<string> = new EventEmitter();

	amIActive(section: string): string {
		if(this.currentSection === section) return 'active';
		return '';
	}

	constructor() { }

	ngOnInit(): void {
	}

}
