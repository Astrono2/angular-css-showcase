import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Componentes+Scharovsky';
	isThemeDark: boolean = true;

	sections: Array<string> = [
		'buttons',
		'toggles'
	];

	currentSection: string = this.sections[0];

	constructor() {
		this.isThemeDark = localStorage.getItem('isThemeDark') === "true";
	}

	ngOnInit(): void {
		this.updateSectionFromURL();
	}

	@HostListener('window:popstate')
	onPopState() {
		this.updateSectionFromURL();
	}

	get themeClass(): string {
		if(this.isThemeDark)
			return 'theme-dark';
		else
			return 'theme-light';
	}

	toggleTheme(): void {
		this.isThemeDark = !this.isThemeDark;
		localStorage.setItem('isThemeDark', this.isThemeDark.toString());
	}

	changeSection(section: string): void {
		history.pushState(null, '', '#' + section);
		this.currentSection = section;
	}

	updateSectionFromURL(): void {
		this.currentSection = location.href.replace(/.*\/#?/, '') || this.currentSection;
	}
}
