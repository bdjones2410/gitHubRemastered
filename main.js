$(document).ready(function(){


$('.mainImage').html(
"<img src='"+ user.avatar_url +"'>"
);

$('.smallMe').html(
  "<a href='#'>"
  +"<img src='"
  + user.avatar_url
  +"'>"
  +"</a>"
);

var createDate = moment(user.created_at).format('ll');

$('#fullName').text(user.name);
$('#userName').text(user.login);
$('.email').text(user.email);
$('.joinTime').text(" Joined On " + createDate);








});
