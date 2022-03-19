import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-showcase-item',
	templateUrl: './showcase-item.component.html',
	styleUrls: ['./showcase-item.component.css']
})
export class ShowcaseItemComponent implements OnInit {
	@Input() type: string = '';

	sourceCSS: string = '';

	@Input() title: string = 'title';

	modalDisplay: string = 'none';

	openModal(): void {
		this.modalDisplay = 'block';
	}

	closeModal(): void {
		this.modalDisplay = 'none';
	}

	get urlCSS() {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${this.type}/${this.title}.css`);
	}

	constructor(private http: HttpClient, public sanitizer: DomSanitizer) {	}

	async ngOnInit() {
		this.http.get(`assets/${this.type}/${this.title}.css`, {responseType: 'text'})
			.subscribe(data => {
				this.sourceCSS = data;
			});
	}

}
