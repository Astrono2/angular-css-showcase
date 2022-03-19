import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	@Input() currentSection: string = 'buttons';
	@Input() sections: Array<string> = [];

	sectionItems: Map<string, Array<string>> = new Map();

	get itemCount(): number {
		if(!this.sectionItems.has(this.currentSection)) return 0;
		return this.sectionItems.get(this.currentSection)!.length;
	}

	get items(): Array<string> {
		if(!this.sectionItems.has(this.currentSection)) return [];
		return this.sectionItems.get(this.currentSection)!;
	}

	constructor() { }

	async ngOnInit() {

		for(let section of this.sections)
		{
			await import(`src/assets/${section}.json`).then(data => {
				this.sectionItems.set(section, data.default);
			});
		}

	}

}
