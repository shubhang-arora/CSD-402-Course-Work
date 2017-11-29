$(document).ready(function() {
  
  $(".collapse-button").click(function() {
    $(this).parent().slideUp("slow");
  })
})


function filterPostByTag(t) {

  
  $(".show").show("slow");
  $(".post:not(." + t + ")").toggle();
}


function clearBox()
{
    $(".show").hide();
}


function filterShowAll() {
  $(".post").show();
}
function initMap() {
    var myLatLng = {lat: 28.6139, lng: 77.2090};

        var chennai = {lat: 13.0827, lng: 80.2707};

        var kol = {lat: 22.5726, lng: 88.3639};

        var ahm = {lat: 23.0225, lng: 72.5714};

        var hyd = {lat: 17.3850, lng: 78.4867};

        var blr = {lat: 12.9716 , lng: 77.5946};

        var selected;

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: hyd
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'New Delhi'
          
        });
        var marker1 = new google.maps.Marker({
          position: chennai,
          map: map,
          title: 'Chennai'
        });
        var marker2 = new google.maps.Marker({
          position: blr,
          map: map,
          title: 'Bangalore'
          });

        var marker3 = new google.maps.Marker({
          position: hyd,
          map: map,
           title: 'Hyderabad'
          
        });
        var marker4 = new google.maps.Marker({
          position: kol,
          map: map,
          title: 'Kolakata'
          
        });

         var marker5 = new google.maps.Marker({
          position: ahm,
          map: map,
          title: 'Ahmedabad'

          
        });

         google.maps.event.addListener(marker,'click',function() {
         selected = marker.getTitle();
         window.alert(marker.getTitle());
         clearBox();
         display_city(selected);
       
     
      });

         google.maps.event.addListener(marker2,'click',function() {
         selected = marker2.getTitle();
         window.alert(marker2.getTitle());
         clearBox();
         display_city(selected);
       
     
      });

         google.maps.event.addListener(marker3,'click',function() {
         selected = marker3.getTitle();
         window.alert(marker3.getTitle());
         clearBox();
         display_city(selected);
       
     
      });


         google.maps.event.addListener(marker4,'click',function() {
         selected = marker4.getTitle();
         window.alert(marker4.getTitle());
         clearBox();
         display_city(selected);
     
      });


         google.maps.event.addListener(marker5,'click',function() {
         selected = marker5.getTitle(); 
         window.alert(marker5.getTitle());
         clearBox();
         display_city(selected);
     
      });

      google.maps.event.addListener(marker1,'click',function() {
         selected = marker1.getTitle();
         window.alert(marker1.getTitle());
         clearBox();
         display_city(selected);
       
     
      });

   }