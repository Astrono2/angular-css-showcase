import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ShowcaseItemComponent } from './showcase-item/showcase-item.component';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		NavbarComponent,
		MainComponent,
		ShowcaseItemComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		HighlightModule
	],
	providers: [
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
				coreLibraryLoader: () => import('highlight.js/lib/core'),
        		languages: {
          			css: () => import('highlight.js/lib/languages/css'),
          		}
			}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
