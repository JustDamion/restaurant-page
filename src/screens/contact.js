import Util from "../util.js";

export default class Contact {
    static render() {
        const CONTACT_TITLE = "Get in touch!";
        const CONTACT_EMAIL = "Email: thereservoirwater@notarealemail.com";
        const CONTACT_PHONE = "Phone: (555)123-456";

        const SCHEDULE_TITLE = "Come See Us!";

        const contactDetails = Util.createDomElement("div", "contact-details");
        contactDetails.appendChild(Util.createDomElement("h2", "contact-details__title", CONTACT_TITLE));
        contactDetails.appendChild(Util.createDomElement("p", "contact-details__email", CONTACT_EMAIL));
        contactDetails.appendChild(Util.createDomElement("p", "contact-details__phone", CONTACT_PHONE));

        const contactScheduleList = Util.createDomElement("ul", "contact-schedule__list");
        contactScheduleList.appendChild(Util.createDomElement("li", "schedule-item", "Monday: 2pm - 3pm"));
        contactScheduleList.appendChild(Util.createDomElement("li", "schedule-item", "Tuesday: 2pm - 3pm"));
        contactScheduleList.appendChild(Util.createDomElement("li", "schedule-item", "Wednesday: 2pm - 3pm"));
        contactScheduleList.appendChild(Util.createDomElement("li", "schedule-item", "Thursday: 2pm - 3pm"));
        contactScheduleList.appendChild(Util.createDomElement("li", "schedule-item", "Friday: 2pm - 4pm"));
        contactScheduleList.appendChild(Util.createDomElement("li", "schedule-item", "Saturday: 8am - 11pm"));
        contactScheduleList.appendChild(Util.createDomElement("li", "schedule-item", "Sunday: Closed"));

        const contactSchedule = Util.createDomElement("div", "contact-schedule");
        contactSchedule.appendChild(Util.createDomElement("h2", "contact-schedule__title", SCHEDULE_TITLE));
        contactSchedule.appendChild(contactScheduleList);

        const contactDiv = Util.createDomElement("div", "contact");
        contactDiv.appendChild(contactDetails);
        contactDiv.appendChild(contactSchedule);

        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(contactDiv);
    }
}