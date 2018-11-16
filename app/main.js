$(document).ready(function () {

  renderTemplate();
  dateNow();
});

$('.route').click(function () {
  var panel = $(this).data('panel');
  $('.screen').hide();
  $('.' + panel).show();
});

function renderTemplate() {

  var template = "{{#.}}<tr><td>{{ID}}</td><td>{{fname}}</td><td>{{lname}}</td><td>{{gender}}</td><td>{{DOB}}</td><td>{{Active}}</td><td>{{creationDate}}</td></tr>{{/.}}";
  // var template = $('#output').html(); 
  var render = Mustache.render(template, patientsData);
  $('.patient-table-body').html(render);
}