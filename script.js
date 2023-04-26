$(document).ready(function() {
       $.ajax({
         type: "GET",
         url: "https://statsapi.web.nhl.com/api/v1/game/2022020806/feed/live",
         success: function(data) {
           var gameDate = data.gameData.datetime.dateTime;
           $("#gameDate").html(gameDate);

           var homeTeam = data.gameData.teams.home.teamName;
           var awayTeam = data.gameData.teams.away.teamName;
           $("#gameTeams").html(awayTeam + " @ " + homeTeam);
           $("#awayTeam").html(awayTeam);

           var firstStar = data.liveData.decisions.firstStar.fullName;
           $("#firstStar").html(firstStar);

           var secondStar = data.liveData.decisions.secondStar.fullName;
           $("#secondStar").html(secondStar);

           var thirdStar = data.liveData.decisions.thirdStar.fullName;
           $("#thirdStar").html(thirdStar);
         }
       });
     });
