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
