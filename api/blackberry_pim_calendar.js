/*
* Copyright 2012 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

 /**
 * @namespace The Calendar object provides functions for creating and finding contacts.
 * @toc {PIM} Calendar
 * @featureID blackberry.pim.calendar
 * @permission access_pimdomain_calendars Permits your app to access calendar.
 */
blackberry.pim.calendar = {
    /**
     * @name blackberry.pim.calendar.createEvent
     * @function
     * @description Returns a new CalendarEvent object. This method does not persist the CalendarEvent object to the device. To persist the CalendarEvent object to the device, invoke the CalendarEvent.save method. <b>Not in DAP specs</b>
     * @param {Object} properties Optional object literal that specifies the field values for the CalendarEvent object. The object should be in the following form (with any number of properties):
     * @param {blackberry.pim.calendar.CalendarFolder} [folder]  Optional CalendarFolder object that contains the event. If no folder is specified, the event will be created in the default calendar.
     * @returns {blackberry.pim.calendar.CalendarEvent}
     * @BB10X
     */
    createEvent: function (properties, folder) {},

    /**
     * @name blackberry.pim.calendar.findEvents
     * @function
     * @description Find calendar event items in the calendar based on some criterion.
     * @param {function} onFindSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onFindSuccess.events The array of CalendarEvent objects from the search.
     * @param {function} [onFindError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The CalendarError object which contains the error code.
     * @param {blackberry.pim.calendar.CalendarFindOptions} findOptions  Options to be applied to the search.
     * @returns {void}
     * @BB10X
     */
    findEvents: function (onFindSuccess, onFindError, findOptions) {},

    /**
     * @name blackberry.pim.calendar.getNextEventsWithAttendee
     * @function
     * @description Fetches the nearest future meetings in which the user and the specified person participate. <b>Not in DAP specs</b>
     * @param {String} attendeeEmail The email which identifies the person that should be present in the returned meetings.
     * @param {function} onSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onSuccess.events The array of CalendarEvent objects.
     * @param {function} [onError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The CalendarError object which contains the error code.
     * @param {Number} limit The maximum number of events to return.
     * @returns {void}
     * @BB10X
     */
    getNextEventsWithAttendee: function (attendeeEmail, onSuccess, onError, limit) {},

    /**
     * @name blackberry.pim.calendar.getLastEventsWithAttendee
     * @function
     * @description Fetches the most recent meetings in which the user and the specified person participate. <b>Not in DAP specs</b>
     * @param {String} attendeeEmail The email which identifies the person that should be present in the returned meetings.
     * @param {function} onSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onSuccess.events The array of CalendarEvent objects.
     * @param {function} [onError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The CalendarError object which contains the error code.
     * @param {Number} limit The maximum number of events to return.
     * @returns {void}
     * @BB10X
     */
    getLastEventsWithAttendee: function (attendeeEmail, onSuccess, onError, limit) {},

    /**
     * @name blackberry.pim.calendar.getCalendarFolders
     * @function
     * @description Retrieves calendar folders from all calendar accounts. <b>Not in DAP specs</b>
     * @returns {blackberry.pim.calendar.CalendarFolder[]}
     * @BB10X
     */
    getCalendarFolders: function () {},

    /**
     * @name blackberry.pim.calendar.getTimezones
     * @function
     * @description Retrieves the list of all time zones supported by the device. The time zones are based on the Olson time zone database. For more information, refer to <a href="http://www.iana.org/time-zones" target="_blank">IANA</a>.  <b>Not in DAP specs</b>
     * @returns {String[]}
     * @BB10X
     */
    getTimezones: function () {}
};