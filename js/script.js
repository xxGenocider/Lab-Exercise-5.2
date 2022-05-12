
// build the content for the text file
function buildData() {
  var fname = $("#fname").val();
  var mname = $("#mname").val();
  var lname = $("#lname").val();
  var suffix = $("#suffix").val();
  var gender = $("#male").is(":checked") ? "Male" : "Female";
  var dob = $("#dob").val();
  var yrLevel =  $("#yrLevel").val();
  var province = $("#province").val();

  var data = "Name: " + fname + " " + mname + " " + lname + " " + suffix + " \n"
             + "Gender: " + gender + "\n"
             + "Date of Birth: " + dob + "\n"
             + "Year Level: " + yrLevel + "\n"
             + "Province: " + province;

  return data;
}

//  function to download the a text file after submission of form
let saveFile = () => { 
  var data = buildData();

  // text data to blob
  const textToBlob = new Blob([data], {type: 'text/plain'});
  const fileName = "student_info.txt";

  // create a link to download the file
  let newLink = document.createElement("a");
  newLink.download = fileName;

  // create a link to the blob
  if(window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBlob);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBlob);
    newLink.style.display("none");
    document.body.appendChild(newLink);
  }

  // click the link to download the file
  newLink.click();
}

// function to use necessary jquery widgets
$(function() {
  // checkboxradio widget
  $("input[type='radio']").checkboxradio();

  // datepicker widget
  $("#dob").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+0",
  });

  // spinner widget
  $("#yrLevel").spinner({
    max: 4,
    min: 1
  });

  // array of provinces
  var provinces = ["Agusan del Norte", "Agusan del Sur", "Basilan","Bukidnon", "Camiguin", "Isabela", "Compostela Valley", "North Cotabato", "Davao del Norte", "Davao del Sur", "Davao Occidental", "Davao Oriental", "Dinagat Islands", "Lanao del Norte", "Lanao del Sur", "Maguindanao", "Misamis Occidental", "Misamis Oriental", "Sarangani", "South Cotabato", "Sultan Kudarat", "Sulu", "Tawi-Tawi", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay", "Surigao del Norte", "Surigao del Sur"];

  // auto-complete widget
  $("#province").autocomplete({
    source: provinces,
    minLength: 2,
    autoFocus: true,
  });

}); 

