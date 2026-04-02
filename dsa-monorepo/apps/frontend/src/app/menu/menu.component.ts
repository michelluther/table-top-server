import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

/***
 *
 *
 */

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: false
})
export class Menu implements OnInit {

	public open: boolean;

	constructor(
		private router: Router
	) {
	}


	ngOnInit(): void {
	}

	gotoList(): void {
		this.router.navigate(['/heroes']);
	}

	toggle(): void {
		this.open = !this.open;
	}

}