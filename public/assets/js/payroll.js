$( "#generator" ).submit(function( event ) {
  event.preventDefault();

  let hours = $("#hours").val();
  let rate = $("#rate").val(); 
  let gross = hours * rate;

  let federal_tax = parseFloat(gross * 7.40 / 400);
  let nc_tax = parseFloat(gross * 12 / 400);
  let medicare_tax = parseFloat(gross * 5.80 / 400);
  let social_security_tax = parseFloat(gross * 24.80 / 400);
  let deductions = parseFloat(federal_tax + nc_tax + medicare_tax + social_security_tax);

  let net = parseFloat(gross - deductions);


  $("#federal_tax").text( accounting.formatMoney(federal_tax) );
  $("#nc_tax").text( accounting.formatMoney(nc_tax) );
  $("#medicare_tax").text( accounting.formatMoney(medicare_tax) );
  $("#social_security_tax").text( accounting.formatMoney(social_security_tax) );
  $("#deductions").text( accounting.formatMoney(deductions) );
  $("#gross").text( accounting.formatMoney(gross) );
  $("#net").text( accounting.formatMoney(net) );

  $( "#results" ).show();
});