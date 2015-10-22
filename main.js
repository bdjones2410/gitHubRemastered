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

///////////// repostuff ////////
// var newRepo =  function(){
//   for (i = 0; i < repos.length; i++) {
//     return {
//           name: repos[i].name,
//           language: repos[i].language,
//           forks: repos[i].forks_count,
//           star: repos[i].stargazers_count,
//           updated: repos[i].updated_at
//        }
// };
// }
// smallerRepo = newRepo();

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
    console.log("smallerRepo: ", repositBar);
  });

$('.repoSect').html(repositBar);




});
