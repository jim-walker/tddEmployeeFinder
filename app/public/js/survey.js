$(function(){
  const validateForm = function () {
    let isValid = true;
    $('input').each(function() {
      if (!$(this).val()) {
        isValid = false;
      }
    });
    $('.custom-select').each(function(i, element) {
      if (!$(this).val()) {
        isValid = false;
      }
    });
    return isValid;
  }
  const displayModal = function(results) {
    $('#match-name').text(results.name);
    $('#match-img').attr('src', results.photo);
    $('#results-modal').modal('toggle');
  }
  const submit = function(e) {
    e.preventDefault();
    if (validateForm()) {
      const userData = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [
          $('#q1').val(),
          $('#q2').val(),
          $('#q3').val(),
          $('#q4').val(),
          $('#q5').val(),
          $('#q6').val(),
          $('#q7').val(),
          $('#q8').val(),
          $('#q9').val(),
          $('#q10').val()
        ]
      };
      $.post('/api/employees', userData, displayModal);
    } else {
      $('#error')
        .text('Please fill out all fields before submitting!')
        .addClass('alert alert-danger');
    }
  }
  $('#submit').on('click', submit)
})