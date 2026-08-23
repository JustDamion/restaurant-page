export default class Contact {
    static render() {
        const contactDetailsTitle = document.createElement("h2");
        contactDetailsTitle.setAttribute("class", "contact-details__title");
        contactDetailsTitle.textContent = "Get in touch!";

        const contactDetailsEmail = document.createElement("p");
        contactDetailsEmail.setAttribute("class", "contact-details__email");
        contactDetailsEmail.textContent = "Email: thereservoirwater@notarealemail.com";

        const contactDetailsPhone = document.createElement("p");
        contactDetailsPhone.setAttribute("class", "contact-details__phone");
        contactDetailsPhone.textContent = "Phone: (555)123-456";

        const contactDetails = document.createElement("div");
        contactDetails.setAttribute("class", "contact-details");
        contactDetails.appendChild(contactDetailsTitle);
        contactDetails.appendChild(contactDetailsEmail);
        contactDetails.appendChild(contactDetailsPhone);

        const contactScheduleTitle = document.createElement("h2");
        contactScheduleTitle.setAttribute("class", "contact-schedule__title");
        contactScheduleTitle.textContent = "Come See Us!";

        const scheduleMonday = document.createElement("li");
        scheduleMonday.setAttribute("class", "schedule-item");
        scheduleMonday.textContent = "Monday: 2pm - 3pm";

        const scheduleTuesday = document.createElement("li");
        scheduleTuesday.setAttribute("class", "schedule-item");
        scheduleTuesday.textContent = "Tuesday: 2pm - 3pm";

        const scheduleWednesday = document.createElement("li");
        scheduleWednesday.setAttribute("class", "schedule-item");
        scheduleWednesday.textContent = "Wednesday: 2pm - 3pm";

        const scheduleThursday = document.createElement("li");
        scheduleThursday.setAttribute("class", "schedule-item");
        scheduleThursday.textContent = "Thursday: 2pm - 3pm";

        const scheduleFriday = document.createElement("li");
        scheduleFriday.setAttribute("class", "schedule-item");
        scheduleFriday.textContent = "Friday: 2pm - 4pm";

        const scheduleSaturday = document.createElement("li");
        scheduleSaturday.setAttribute("class", "schedule-item");
        scheduleSaturday.textContent = "Saturday: 8am - 11pm";

        const scheduleSunday = document.createElement("li");
        scheduleSunday.setAttribute("class", "schedule-item");
        scheduleSunday.textContent = "Closed";

        const contactScheduleList = document.createElement("ul");
        contactScheduleList.setAttribute("class", "contact-schedule__list");
        contactScheduleList.appendChild(scheduleMonday);
        contactScheduleList.appendChild(scheduleTuesday);
        contactScheduleList.appendChild(scheduleWednesday);
        contactScheduleList.appendChild(scheduleThursday);
        contactScheduleList.appendChild(scheduleFriday);
        contactScheduleList.appendChild(scheduleSaturday);
        contactScheduleList.appendChild(scheduleSunday);

        const contactSchedule = document.createElement("div");
        contactSchedule.setAttribute("class", "contact-schedule");
        contactSchedule.appendChild(contactScheduleTitle);
        contactSchedule.appendChild(contactScheduleList);

        const contactDiv = document.createElement("div");
        contactDiv.setAttribute("class", "contact");
        contactDiv.appendChild(contactDetails);
        contactDiv.appendChild(contactSchedule);

        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(contactDiv);
    }
}