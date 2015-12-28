/* Exercise 1: Wish list */
function addToList(item){
  $('#items').append('<li>' + item + '<span class="label pending">Pending</span>' + '</li>');
  updateTotal();
}

$(document).on('click', '#add-to-list', function(){
  addToList($('input').val());
  $('input').val('');
  $('input').focus();

});

$(document).on('click', '.pending', function(){
   var li_node = $(this).parent().append('<span class="label success">Done!</span>');
   $(this).remove('.pending');
   li_node.addClass('completed');
   updateTotal();

})

function updateTotal(){
  var pending = $('.pending').length;
  var completed = $('.completed').length;
  $('.total').text('Pending: ' + pending + ' Completed: ' + completed);
}

$(document).keypress(function (e) {
 var key = e.which;
 if(key === 13)  // the enter key code for enter/return
  {
    $('#add-to-list').click();
    return false;
  }
});
