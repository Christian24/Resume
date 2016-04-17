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
	constructor(title, personalDetails) {
		this.title = title;
		this.personalDetails = personalDetails;
	}
}
 ResumeData;
export let personalDetails = new PersonalDetails("Christian Siebmanns","christian.siebmanns@hotmail.de", "+49 (0151) 2919-0609","Spiekerhof 2","Germany", "Münster", "48143" );
export let resumeEn = new ResumeData("Resume",personalDetails);
