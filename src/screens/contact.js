export default class Contact {
    static render() {
        const contactDetailsTitle = document.createElement("h2");
        contactDetailsTitle.setAttribute("class", "contact__details-title");
        contactDetailsTitle.textContent = "Get in touch!";

        const contactDetailsEmail = document.createElement("p");
        contactDetailsEmail.setAttribute("class", "contact__details-email");
        contactDetailsEmail.textContent = "Email: thereservoirwater@notarealemail.com";

        const contactDetailsPhone = document.createElement("p");
        contactDetailsPhone.setAttribute("class", "contact__details-phone");
        contactDetailsPhone.textContent = "Phone: (555)123-456";

        const contactDetails = document.createElement("div");
        contactDetails.setAttribute("class", "contact__details");
        contactDetails.appendChild(contactDetailsTitle);
        contactDetails.appendChild(contactDetailsEmail);
        contactDetails.appendChild(contactDetailsPhone);

        const contactScheduleTitle = document.createElement("h2");
        contactScheduleTitle.setAttribute("class", "contact__schedule-title");
        contactScheduleTitle.textContent = "Come See Us!";

        const scheduleMonday = document.createElement("li");
        scheduleMonday.setAttribute("class", "contact__schedule-item");
        scheduleMonday.textContent = "Monday: 2pm - 3pm";

        const scheduleTuesday = document.createElement("li");
        scheduleTuesday.setAttribute("class", "contact__schedule-item");
        scheduleTuesday.textContent = "Tuesday: 2pm - 3pm";

        const scheduleWednesday = document.createElement("li");
        scheduleWednesday.setAttribute("class", "contact__schedule-item");
        scheduleWednesday.textContent = "Wednesday: 2pm - 3pm";

        const scheduleThursday = document.createElement("li");
        scheduleThursday.setAttribute("class", "contact__schedule-item");
        scheduleThursday.textContent = "Thursday: 2pm - 3pm";

        const scheduleFriday = document.createElement("li");
        scheduleFriday.setAttribute("class", "contact__schedule-item");
        scheduleFriday.textContent = "Friday: 2pm - 4pm";

        const scheduleSaturday = document.createElement("li");
        scheduleSaturday.setAttribute("class", "contact__schedule-item");
        scheduleSaturday.textContent = "Saturday: 8am - 11pm";

        const scheduleSunday = document.createElement("li");
        scheduleSunday.setAttribute("class", "contact__schedule-item");
        scheduleSunday.textContent = "Closed";

        const contactScheduleList = document.createElement("ul");
        contactScheduleList.setAttribute("class", "contact__schedule-list");
        contactScheduleList.appendChild(scheduleMonday);
        contactScheduleList.appendChild(scheduleTuesday);
        contactScheduleList.appendChild(scheduleWednesday);
        contactScheduleList.appendChild(scheduleThursday);
        contactScheduleList.appendChild(scheduleFriday);
        contactScheduleList.appendChild(scheduleSaturday);
        contactScheduleList.appendChild(scheduleSunday);

        const contactSchedule = document.createElement("div");
        contactSchedule.setAttribute("class", "contact__schedule");
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