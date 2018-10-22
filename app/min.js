$(document).ready(function(){

  $('[data-form=patient]').show();
  var patientData = '';
  var userData = '';

  $.each(patientsData, function(key,value)
  {
   patientData += '<tr>';
   patientData += '<td>' + value.ID + '</td>';
   patientData += '<td>' + value.fname + '</td>';
   patientData += '<td>' + value.lname + '</td>';
   patientData += '<td>' + value.gender + '</td>';
   patientData += '<td>' + value.DOB + '</td>';
   patientData += '<td>' + value.Active + '</td>';
   patientData += '<td>' + value.creationDate + '</td>';
  });
   $('.patient-form').append(patientData);
  $.each(usersData, function(key, value)
  {
   userData += '<tr>';
   userData += '<td>' + value.ID + '</td>';
   userData += '<td>' + value.mname + '</td>';
   userData += '<td>' + value.lname + '</td>';
   userData += '<td>' + value.email + '</td>';
   userData += '<td>' + value.DOB + '</td>';
   userData += '<td>' + value.gender + '</td>';
   userData += '<td>' + value.creationDate + '</td>';
  }); 
  $('.users-form').append(userData); 
});

$('.patient_nav').on('click', function()
{
  $('[data-form=patient]').show();
  $('[data-form=user]').hide();
  $('.patient-add-form').hide();
  $('.user-add-form').hide();   



});

$('.user_nav').on('click', function()
{
  $('[data-form=user]').show();
  $('[data-form=patient]').hide();
  $('.user-add-form').hide();   
  $('.patient-add-form').hide();
   
});

$('.add-new-btn').on('click', function()
{
 if ($('[data-form=patient]').css('display') == 'block')
 {
  $('.patient-add-form').show();
  $('.user-add-form').hide();
  $('[data-form=patient]').hide();
 } else {
  $('.user-add-form').show();
  $('.patient-add-form').hide();
  $('[data-form=user]').hide();
 }
});



var patientsData=[
 { ID: 93095637, fname: "Amro", mname: "حسين", lname: "Srour", DOB: new Date("12/23/1954"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095638, fname: "Ahmad", mname: "عبدالعالي", lname: "Srour", DOB: new Date("12/23/1985"), gender: 1, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095639, fname: "Mahmoud", mname: "محمد", lname:"Jamal", DOB: new Date("12/23/1946"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 },
 { ID: 93095640, fname: "Hussien", mname: "غازي", lname:"Qandil", DOB: new Date("12/23/2007"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095641, fname: "Alaa", mname: "مرزوق", lname: "Zaid", DOB: new Date("12/23/1998"), gender: 1, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095642, fname: "Doaa", mname: "احمد", lname: "Amro", DOB: new Date("12/23/2010"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095643, fname: "Mai", mname: "حسن", lname: "Jalal", DOB: new Date("11/17/1963"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095644, fname: "Haitham", mname: "صالح", lname: "Hamo", DOB: new Date("12/23/1967"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095645, fname: "Khalil", mname: "حسن", lname: "Sam", DOB: new Date("03/29/1967"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095646, fname: "Yousef", mname: "حسن", lname: "Montaser", DOB: new Date("12/23/1985"), gender: 1, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095647, fname: "Omar", mname: "عقاب", lname: "Amer", DOB: new Date("12/23/1972"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095648, fname: "Zaid", mname: "عمر", lname: "Srour", DOB: new Date("12/23/1972"), gender: 2, email: "", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 }
 ];

var usersData = [
 { ID: 93095637, fname: "Amro", mname: "Mohammed", lname: "Srour", DOB: new Date("12/23/1954"), gender: 2, email: "moh@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095638, fname: "Ahmad", mname: "Jamal", lname: "Srour", DOB: new Date("12/23/1985"), gender: 1, email: "jam@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095639, fname: "Mahmoud", mname: "Mostafa", lname:"Jamal", DOB: new Date("12/23/1946"), gender: 2, email: "sam@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095640, fname: "Hussien", mname: "Ismail", lname:"Qandil", DOB: new Date("12/23/2007"), gender: 2, email: "Ismail@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095641, fname: "Alaa", mname: "Hatem", lname: "Zaid", DOB: new Date("12/23/1998"), gender: 1, email: "Hatem@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095642, fname: "Doaa", mname: "Loai", lname: "Amro", DOB: new Date("12/23/2010"), gender: 2, email: "Loai@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095643, fname: "Mai", mname: "Ahmad", lname: "Jalal", DOB: new Date("11/17/1963"), gender: 2, email: "ahmad@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095644, fname: "Haitham", mname: "Ashraf", lname: "Hamo", DOB: new Date("12/23/1967"), gender: 2, email: "Ashraf@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095645, fname: "Khalil", mname: "Hazem", lname: "Sam", DOB: new Date("03/29/1967"), gender: 2, email: "haz@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095646, fname: "Yousef", mname: "Basel", lname: "Montaser", DOB: new Date("12/23/1985"), gender: 1, email: "bas@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095647, fname: "Omar", mname: "Yasen", lname: "Amer", DOB: new Date("12/23/1972"), gender: 2, email: "yas@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } , 
 { ID: 93095648, fname: "Zaid", mname: "Raed", lname: "Srour", DOB: new Date("12/23/1972"), gender: 2, email: "raed@amr.com", lastCheck: new Date("12/23/2014"), status: 0 , Active:true, creationDate: new Date("12/23/2014"), CreatedBy: 1 } ]; 


