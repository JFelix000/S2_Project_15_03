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

      document.getElementById("regSubmit").onclick = sessionTest;
      // this is to get the calcCart function run whenever something is focused
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;

      document.getElementById("sessionBox").onchange = calcCart;

      document.getElementById("mediaCB").onclick = calcCart;

      calcCart();
});


function sessionTest() {
      var confSession = document.getElementById("sessionBox");
      if (confSession === -1) {
            confSession.setCustomValidity("Select a Session Package");
      } else {
            confSession.setCustomValidity("");
      }
}


function calcCart() {
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;
      // this is to store the respected ids and the values inserted
      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;
      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;
      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;

      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;
      // This is to get the sessionBox id set and the selectedIndex is the attribute
      var selectedIndex = document.getElementById("sessionBox").selectedIndex;

      if (selectedIndex != -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;
            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }

      
      if (document.forms.regForm.elements.mediaCB.checked) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "no";
            sessionStorage.confPackCost = 0;
      }
      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);

      writeSessionValues();
}



function writeSessionValues() {
      // set the text of the items in the slots to the right of the website with sessionStorage
      document.getElementById("regName").textContent = sessionStorage.confName;
      document.getElementById("regGroup").textContent = sessionStorage.confGroup;
      document.getElementById("regEmail").textContent = sessionStorage.confMail;
      document.getElementById("regPhone").textContent = sessionStorage.confPhone;
      document.getElementById("regSession").textContent = sessionStorage.confSession;
      document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
      document.getElementById("regPack").textContent = sessionStorage.confPack;

      document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}