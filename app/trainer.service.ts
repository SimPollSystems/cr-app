import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Trainer } from './trainer';

@Injectable()
export class TrainerService {
	private trainersUrl = 'app/trainers'; // URL to web api

	constructor(private http: Http) { }

	getTrainers(): Promise<Trainer[]> {
		return this.http.get(this.trainersUrl)
			.toPromise()
			.then(response => response.json().data)
			.catch(this.handleError);
	}

	getTrainer(id: number) {
		return this.getTrainers()
			.then(trainers => trainers.filter(trainer => trainer.id === id)[0]);
	}

	save(trainer: Trainer): Promise<Trainer> {
		if (trainer.id) {
			return this.put(trainer);
		}
		return this.post(trainer);
	}

	delete(trainer: Trainer) {
		let headers = new Headers();
		headers.append('Content-type', 'application/json');

		let url = `${this.trainersUrl}/${trainer.id}`;

		return this.http
			.delete(url, headers)
			.toPromise()
			.catch(this.handleError);
	}

	// Add New Trainer
	private post(trainer: Trainer): Promise<Trainer> {
		let headers = new Headers({
			'Content-Type': 'application/json'});
		return this.http
			.post(this.trainersUrl, JSON.stringify(trainer), {headers: headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	// Update Existing Trainer
	private put(trainer: Trainer) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.trainersUrl}/${trainer.id}`;

		return this.http
			.put(url, JSON.stringify(trainer), {headers: headers})
			.toPromise()
			.then(() => trainer)
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}