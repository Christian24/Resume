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
	description: "fluent, 5 years, Cambridge ESOL Level 2 Grade C1"
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
				role: "Lead Developer & Founder",
				company: "Wheelom",
				start: "Feb 2012 ",
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
	},
	experience: {name: "Experience",
		items: {
			econimicsAssociation: {
				role: "Web Developer",
				company: "Münster University of Applied Sciences's Economics Association",
				start: "Dec 2015",
				end: "Present",
				descriptions: [
					"Developed calendar web application for Münster University of Applied Sciences’s economics student association new website"
				]
			},
			qualityImprovement: {
				role: "Quality Improvement Commission",
				company: "Münster University of Applied Sciences",
				start: "Oct 2015",
				end: "Present",
				descriptions: [
					"Voted on budgeting proposals as part of committee responsible for improvement of educational quality"
				]
			},
			dio: {
				role: "Web Developer",
				company: "Gymnasium Dionysianum Rheine",
				start: "Jan 2010",
				end: "Dec 2011",
				descriptions: [
					"Relaunched dionysianum.de"
				]
			},
			educon: {
				role: "Project Assistant",
				company: "EDU-CON Strategic Education Consulting GmbH",
				start: "Oct 2010 ",
				end: "Present",
				descriptions: [
					"Authored newsletter articles on study related themes",
					"Produced websites for study orientation in German and English",
					"Wrote various scripts for YouTube clips on study-related topics",
					"Tested various online tools to ensure effective registration experience for prospective students"]
			},
			dionys: {
				role: "Instructor",
				company: "St. Dionys Rheine",
				start: "May 2010",
				end: "Jan 2014",
				descriptions: [
					"Instructed confirmands based on own learning materials and assisted in coordinating activities"
				]
			},
			jakobi: {
				role: "Coordinator",
				company: "Jugendzentrum Jakobi Rheine",
				start: "Jan 2009",
				end: "Present",
				descriptions: [
					"Coordinated trips and activities for the organization and its visitors"
				]
			}
		}
	}

};
export let educationsData = {
	fh: {
		college: "Münster University of Applied Sciences",
		degree: "Business Informatics",
		text: "Expected Graduation: Sep 2017" 
	}
};
