/*

The creator of this javascript is:

   New Perspectives on HTML5 and CSS3, 8th Edition

   Coming from:
   Tutorial 7

I do not take ownership of this script. I am using it to validate my feedback form.

Date created: 04/03/2024

*/

window.onload = function() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
       return false;
    };
 };