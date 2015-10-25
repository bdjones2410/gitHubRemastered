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
$('.smlMe').html(
  "<a href='#'>"
  +"<img src='"
  + user.avatar_url
  +"'>"
  +"</a>"
);

$('.midMe').html(
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



///////////// TABS /////////////////////////



$('.repTabButton').click(function(event){
  event.preventDefault();
  $('.repoTab').css('display', 'inline-block')
  $('.publicActTab').css('display', 'none')
});

$('.pubTabButton').click(function(event){
  event.preventDefault();
  $('.publicActTab').css('display', 'inline-block')
  $('.repoTab').css('display', 'none')
})



///////   REPOSITORY BAR ////////////////////
//// .substring ///////  allows you to pull out sections of an array(0, 6) = first 7 items of array.



var repositBar = "";
  _.each(repos, function(curVal, idx, arr){
    repositBar += "<div class='repoBar'>"
    +"<div class='upperRepo'>"
    +"<a class='repoTitle' href='#'>"
    +"<h3>"
    +curVal.name
    +"</h3>"
    +"</a>"
    +"<div class='repoType'>"
    +curVal.language
    +"<span class='starIcon octicon octicon-star'>"
    +curVal.stargazers_count
    +"</span>"
    +"<span class='branchicon octicon octicon-git-branch'>"
    +curVal.forks_count
    +"</span>"
    +"</div>"
    +"</div>"
    +"<div class='lowerRepo'><div class='repoUpdateTime'>"
    +"Updated: "
    +"<span class ='repoTime'>"
    +moment(curVal.updated_at).format('ll')
    +"</span>"
    +"</div>"
    +"</div>"
    +"</div>";
  });

$('.repoSect').html(repositBar);



/////////activity Tab ///////////


var activityBar = "";
_.each(activity, function(curAct){
  if(curAct.type==="PushEvent") {
    activityBar += "<div class= 'repoBar'>"
          +"<div class='pushIcon mega-octicon octicon-git-commit'>"
          +"</div>"
          +"<section class='innerpush'>"
          +'<div class ="timeBar">'
          + '<time class ="createTime">'
          +moment(curAct.created_at).startOf('hour').fromNow()
          +'</time>'
          +'</div>'
          +'<div class ="createBar">'
          + '<span class="createUser">'
          + curAct.actor.login
          +'</span>'
          + '<h5>pushed to</h5>'
          +'<span class="branchtype">'
          + curAct.payload.ref.split('/').pop()
          +'</span>'
          +'<h5>at</h5>'
          +'<span class="url">'
          +curAct.repo.name
          +'</span>'
          +'</div>'
          +'<div class="infoBar">'
          +'<div class="midMe">'
          + "<a href='#'>"
          +"<img src='"
          + curAct.actor.avatar_url
          +"'>"
          +"</a>"
          +'</div>'
          +'<div class="smlMe">'
          +"<a href='#'>"
          +"<img src='"
          + curAct.actor.avatar_url
          +"'>"
          +"</a>"
          +'</div>'
          +'<span class="shaNum">'
          +curAct.payload.commits[0].sha.substring(0,7)
          +'</span>'
          + '<span class="message">'
          + curAct.payload.commits[0].message
          +'</span>'
          +'</div>'
          +'</section>'
          +'</div>'
  }
    else if (curAct.type==="CreateEvent" && curAct.payload.ref_type==="branch") {
      activityBar += "<div class= 'createBar'>"
      +'<div class ="create">'
      +'<div class="createBar">'
      +'<div class="icon octicon octicon-git-branch">'
      +'</div>'
      +'<section class="innerpush">'
      +'<span class="createUser">'
      +" "
      +curAct.actor.login
      +" "
      +'</span>'
      +'<h6>created '
      +" "
      +curAct.payload.ref_type
      +" "
      +'</h6>'
      +'<span class="branchtype">'
      +" "
      +curAct.payload.ref
      +" "
      +'</span>'
      +'<h5>at</h5>'
      +'<span class="url">'
      +" "
      +curAct.repo.name
      +" "
      +'</span>'
      +'<time class ="createTime">'
      +" "
      +moment(curAct.created_at).startOf('hour').fromNow()
      +" "
      +'</time>'
      +'</section>'
      +'</section>'
      +'</div>'
      +'</div>'
    }

    else if (curAct.type==="CreateEvent" && curAct.payload.ref_type==="repository") {
      activityBar += "<div class= 'createBar'>"
      +'<div class ="create">'
      +'<div class="createBar">'
      +'<div class="icon octicon octicon-repo">'
      +'</div>'
      +'<section class="innerpush">'
      +'<span class="createUser">'
      +"  "
      +curAct.actor.login
      +"  "
      +'</span>'
      +'<h6>'
      +"  "
      +"created "
      +curAct.payload.ref_type
      +"  "
      +'</h6>'
      +'<span class="url">'
      +"  "
      +curAct.repo.name
      +"  "
      +'</span>'
      +'<time class ="createTime">'
      +"  "
      +moment(curAct.created_at).startOf('hour').fromNow()
      +"  "
      +'</time>'
      +'</section>'
      +'</section>'
      +'</div>'
      +'</div>'

    }

});
$('.publicActTab').html(activityBar);




_.each(activity, function(curVal){
     return _.each(curVal.payload.commits, function(stuff){
        return(stuff.message);
    });
});






});
