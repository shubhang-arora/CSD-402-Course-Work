var cities=[
  {
    "city":"Ahmedabad",
    "q":"How do I apply for a winter internship in IIM Ahmedabad?",
    "a":"Look up the IIM-A website. You can find all the professors listed accorded to their field of work and area of expertise. Mail ID's for all of them are provided on the website. Go through their research papers and works to understand what projects they have worked on / are currently working on. This will help you choose which professor you would want to work under.",
    "stars": "0"
  }
  ,
  {
    "city":"Ahmedabad",
    "q":"Why would anyone go from Mumbai to Ahmedabad by bullet train if they get flights for the same fare?",
    "a":"The faster bullet train will take 2:07 hours to reach from Mumbai to Ahmedabad. Flight takes 1:15 hours for the same. But you need to get to the airport an hour before the journey. Then after you reach your destination, you’ll have to wait at baggage claim. This doubles your total time to 2:30 hours.",
    "stars":"0"
  }
  ,
  {
    "city":"New Delhi",
    "q":"Has Kejriwal really hurt the image of IITs?",
    "a":"Frankly, many of my IITian friends are jealous of Arvind Kejriwal. It is not like he is the brightest or smartest. What he has is an amazing dose of tenacity, fearlessness, and passion for his mission — to change the system so that honest, pro-people governance becomes a norm in India. Like any other human being, Kejriwal is not without flaws. Nevertheless, his mission is inspiring, his efforts impressive, and his single-mindedness inimitable.",
    "stars":"0"
  }
  ,

  {
    "city":"New Delhi",
    "q":"Why do the lights of metro trains go dim in the stretch of Udyog Bhawan - Central Secretariat?",
    "a":"Each individual single phase supply though has the rated 25000 volts supply,but it varies with respect to time (ALTERNATING CURRENT).Therefore,we cannot arbitrarily end up one phase and start the next phase the very next moment.If we do so,it can lead to an electric arc formation (heavy sparking) which can damage the electrical equipments (transformers,traction motor, blowers etc.). Henceforth,an electrically dead section called NEUTRAL SECTION is provided to prevent such an occurrence.",
    "stars":"0"
  }
  ,
  {
    "city":"Kolakata",
    "q":"What should everyone know about Kolkata?",
    "a":"A large population of Kolkata are Marwaris and Biharis. Bengali people form the majority of Kolkata's population; Marwaris and Biharis compose large minorities.Kolkata is probably the cheapest Metropolitan City. Fooding,Transportation and Lodging can be arranged in extremely low budgets. Its the city of Joy. You will find a perfect blend of cultures, communities, languages. Everyone leaves in peace.",
    "stars": "0"
  }
  ,

  {
    "city":"Kolakata",
    "q":"What are the startups based in Kolkata, India?",
    "a":"Kolkata is not the keyword people have in mind, when people mention startups in India. But still many young & restless so-called entrepreneurs are trying to change the game in various parts on the city. There is also a co-working space available in Saltlake called the Nasscom Warehouse. The Kolkata Angels Network is really active. Wow Momos which is very sucessfull startup that has expanded to the rest of the country started in Kolkata.",
    "stars": "0"
  }
  ,
  {
    "city":"Chennai",
    "q":"What is Blockchain?",
    "a":"A blockchain, or distributed ledger, is mostly known for the first technology it enabled, the Bitcoin, which Satoshi Nakamoto first described in a paper in 2008. I will try to provide a general overview of the technology and its potential, from both practical and technical perspectives, which you should be able to understand without any previous knowledge on the blockchain.",
    "stars": "0"
  }
  ,

  {
    "city":"Chennai",
    "q":"What is a digital ledger?",
    "a":"Distributed ledger technology (DLT) is a digital system for recording the transaction of assets in which the transactions and their details are recorded in multiple blocks",
    "stars":"0"
  }
  ,
  {
    "city":"Hyderabad",
    "q":"What should someone know before moving to Hyderabad?",
    "a":"Very low cost of living. In Hyderabad you have extremely cheap housing, cheap transport. Even for entertainment, most theaters cost you only half the rate as compared to Bangalore or Mumbai. A ticket in Imax costs barely 150. ( That's the largest screen in India btw) ",
    "stars":"0"
  }
  ,

  {
    "city":"Hyderabad",
    "q":"What are the cons of moving to Hyderabad?",
    "a":"While hyderabad does have a few places worth seeing here and there, it is nothing compared to Mumbai or Delhi, hyderabad has a laziness and a very casual attitude towards work, plus people (both pedestrians and riders) have zero traffic sense, this can initially seem nice to some people, but as time passes by and one grows older and mature, this can be very frustratin",
    "stars":"0"
  }
  ,
  {
    "city":"Bangalore",
    "q":"",
    "a":"",
    "stars":"0"
  }
  ,

  {
    "city":"Bangalore",
    "q":"",
    "a":"",
    "stars":"0"
  }
  ,
];










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
    $(".show").empty();
}


function filterShowAll() {
  $(".post").show();
}



function display_city(city_name){

  var list_q = []
  var list_a = []


  $.each(cities, function(i, v) {
    if (v.city == city_name) {
      list_a.push(v.a);
      list_q.push(v.q);    
    }

});
  console.log(list_a);
  alert(list_a);
  alert(list_q);
  append_question(list_q,list_a,city_name);

}


function append_question(list1, list2, city_name){

  var heading =  $("<h2></h2>").text(city_name);

  var format1 = "<section id='answer-section'> <article> ";

  var q1 = $("<h3></h3>").text(list1[0]);
  var a1 = $("<p></p>").text(list2[0]);
  var star = "<button type='button' class='btn btn-default btn-lg'><span class='glyphicon glyphicon-star' aria-hidden='true'></span> Star</button>";
  var surf = "<a  class='btn btn-info' style='background-color: #800000;'data-toggle='collapse'>Surf</a>";
  var format_end = "</article></section>";
  var format12 = "<section id='answer-section'> <article> "
  var q2 = $("<h3></h3>").text(list1[1]);
  var a2 = $("<p></p>").text(list2[1]);
  var format_end2 = "</article></section>";

  var format_end = "</article></section>";
  
  $("#show_all").append(heading,format1,q1,a1,star,surf,format_end,format12,q2,a2,format_end2);      // Append the new elements 


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