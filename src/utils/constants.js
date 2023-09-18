import { nanoid } from "nanoid";

export const todoList = [
	{ id: nanoid(), title: "Skicka rapporten till chefen.", done: true },
	{ id: nanoid(), title: "Handla mat och laga en veckomeny.", done: false },
	{ id: nanoid(), title: "Städa och organisera hemmet.", done: false },
	{
		id: nanoid(),
		title: "Skriv ett blogginlägg eller dagboksinlägg.",
		done: false,
	},
	{
		id: nanoid(),
		title: "Studera för en kommande tenta eller prov.",
		done: true,
	},
	{ id: nanoid(), title: "Träffa en vän för kaffe eller lunch.", done: false },
	{
		id: nanoid(),
		title: "Sätt upp nya mål för personlig utveckling.",
		done: false,
	},
	{ id: nanoid(), title: "Boka flyg eller tågbiljetter.", done: false },
	{ id: nanoid(), title: "Säkerhetskopiera dina viktiga filer.", done: false },
	{ id: nanoid(), title: "Återvinn eller sortera dina sopor.", done: false },
];
