"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Jose Felix
   Date:    4.23.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
window.addEventListener("load", function () {
      calcCart();
      // lets sessiontest run whenever the regSubmit button is clicked
      document.getElementById("regSubmit").onclick = sessionTest;
      // runs calcCart every focus change
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquentBox").onblur = calcCart;
      // runs calcCart when sessionBox is changed
      document.getElementById("sessionBox").onchange = calcCart;
      //runs calcCart when mediaCB is changed
      document.getElementById("mediaCB").onclick = calcCart;
});

function sessiontest () {
      var session = document.getElementById("sessionBox");
      if (indexOf(session) !== -1) { 
            session.setCustomValidity("Select a session package");
      } else {
            session.setCustomValidity("");
      }
}

function calcCart() {
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;
      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;
      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneNumber.value;
}