import { Injectable } from '@angular/core';
import { CARDS } from './mock-cards';

@Injectable()
export class CardService {
	getCards() {
		return Promise.resolve(CARDS);
	}
}