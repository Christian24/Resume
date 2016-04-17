import {PersonalDetails} from "./PersonalDetails";
//let resumeEn = {
//	title: "Resume",
//	personalDetails: {
//		name: "Christian Siebmanns",
//		email: "christian.siebmanns@hotmail.de",
//		telephone: "+49 (0151) 2919-0609",
//		street: "Spiekerhof 2",
//		city: "Münster",
//		postal: "48143",
//		country: "Germany",

//	}
//};
export class ResumeData {
	constructor(title, personalDetails,languages) {
		this.title = title;
		this.personalDetails = personalDetails;
		this.languages = languages;
	}
};

export let personalDetails = new PersonalDetails("Christian Siebmanns","christian.siebmanns@hotmail.de", "+49 (0151) 2919-0609","Spiekerhof 2","Germany", "Münster", "48143" );
export let resumeEn = new ResumeData("Resume",personalDetails, "Languages");
export let languagesData = {
	english:{name: "English",
	description: "fluent, 5 years, Cambridge ESOL Level 2 Niveau C1"
},
	french: {
		name: "French",
		description: "3 years"
	},
	spanish: {
		name: "Spanish",
		description: "1 year",
	},
	german: {
		name: "German",
		description: "native"
	}

};
export let categoriesData = {
	entrepeneurial: {name: "ENTREPENEURIAL EXPERIENCE",
		items: {
			wheelom: {
				role: "Lead Developer",
				company: "Wheelom",
				start: "Feb. 2012 ",
				end: "Present",
				descriptions: [
					"Designed and developed Wheelom, a 3D mobile game featured on front-page of Windows Phone Store",
					"Continued development of updates, follow-up games, and content for in-game purchases",
					"Published Wheelom for iOS, Windows Phone, Windows Store and monetized with optimal revenue model for each platform, including Freemium (free with in-game purchases), free trial, in-game ads, and sales",
					"Recruited, hired, and managed team of programmers, artists, and testers in developing the game and the proprietary game engine and development tools used to build it",
					"Designed and personally implemented www.wheelom.com website and lead viral marketing of game"
				]
			}
		}
	}
};
