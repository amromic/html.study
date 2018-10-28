$(document).ready(function () {
  renderTemplate();
});

$('.route').click(function () {
  var panel = $(this).data('panel');
  $('.screen').hide();
  $('.' + panel).show();
});

function renderTemplate() {
  var patientData = '';
  $.each(patientsData, function (key, value) {
    patientData += '<tr>';
    patientData += '<td>' + value.ID + '</td>';
    patientData += '<td>' + value.fname + '</td>';
    patientData += '<td>' + value.lname + '</td>';
    patientData += '<td>' + value.gender + '</td>';
    patientData += '<td>' + value.DOB + '</td>';
    patientData += '<td>' + value.Active + '</td>';
    patientData += '<td>' + value.creationDate + '</td>';
  });
  $('.patient-table-body').append(patientData);
}