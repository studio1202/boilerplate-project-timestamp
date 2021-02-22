"use strict";

/**
 * Converts a timestamp into a Date
 * @param {String} timeStamp Timestamp in seconds or as String YYYY-MM-DD
 * @returns {Date} Date or NaN if the timestamp is not valid
 */
function timeStampToDate(timeStamp) {
  // if the timestamp is a number parse it as seconds, otherwise let Js deal with the string
  return (/^\d+$/.test(timeStamp) ?
    new Date(Number(timeStamp)) :
    new Date(timeStamp));
}

/**
 * Converts a date object into the format required by FCC.
 * @param {Date} date
 * @returns {Object} Object in format { unix, utc }
 */
function dateToFccFormat(date) {
  return { unix: date.getTime(), utc: date.toUTCString() };
}

module.exports = { timeStampToDate, dateToFccFormat };
