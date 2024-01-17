export class UserForm {
	constructor(public parent: Element | null) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:button': this.onButtonClick,
		};
	}

	onButtonClick(): void {
		console.log('Hi there');
	}

	template(): string {
		return `<div>
      <h1>User Form</h1>
      <input />
    </div>`;
	}

	render(): void {
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		if (this.parent === null) {
			throw new Error('Parent element ID does not exist');
		}
		this.parent.append(templateElement.content);
	}
}
