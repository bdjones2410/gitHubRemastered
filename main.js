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

$('#fullName').text(user.name);
$('#userName').text(user.login);
$('.email').text(user.email);








});
