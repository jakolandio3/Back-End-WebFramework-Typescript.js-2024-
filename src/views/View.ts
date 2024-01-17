import { HasId, Model } from '../models/Model';

//this tells ts that the passed generic types will pass the interface checks of model with a type of something that satisfies the check of hasId
export abstract class View<T extends Model<K>, K extends HasId> {
	regions: { [key: string]: Element } = {};
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}
	//tell ts these classes will exist eventually
	abstract template(): string;
	eventsMap(): { [key: string]: () => void } {
		return {};
	}

	regionsMap(): { [key: string]: string } {
		return {};
	}
	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
	}
	//making a helper method\
	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');
			fragment.querySelectorAll(selector).forEach((element) => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		}
	}
	//populate the regions list with elements
	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();
		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);
			if (element) {
				this.regions[key] = element;
			}
		}
	}

	onRender(): void {}

	render(): void {
		this.parent.innerHTML = '';

		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		//call the binding event
		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);
		this.onRender();
		this.parent.append(templateElement.content);
	}
}
