

var config = {
    host: 't733aok492ackru.eu.qlikcloud.com',
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: '5ISKmv_c1ggqdTjjJoA3IikwiswnNIZg' 
};

//Redirect to login if user is not logged in
async function login() {
  function isLoggedIn() {
      return fetch("https://"+config.host+"/api/v1/users/me", {
          method: 'GET',
          mode: 'cors',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
              'qlik-web-integration-id': config.webIntegrationId,
          },
      }).then(response => {
          return response.status === 200;
      });
  }
  return isLoggedIn().then(loggedIn =>{
      if (!loggedIn) {
          window.location.href = "https://"+config.host+"/login?qlik-web-integration-id=" + config.webIntegrationId + "&returnto=" + location.href;
          throw new Error('not logged in');
      }
  });
}
login().then(() => {
  require.config( {
      baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
      webIntegrationId: config.webIntegrationId
  } );
  //Load js/qlik after authentication is successful

    //Load js/qlik after authentication is successful
    require( ["js/qlik"], function ( qlik ) {
        qlik.on( "error", function ( error ) {
            $( '#popupText' ).append( error.message + "<br>" );
            $( '#popup' ).fadeIn( 1000 );
        } );
        $( "#closePopup" ).click( function () {
            $( '#popup' ).hide();
        } );



var app = qlik.openApp('c5dfe0d2-1fbb-4513-a172-823616bf1271', config);


// KPI of Total listings (varies depending on previous selections)
app.visualization.get('cRfKt').then(function(vis){
    vis.show("KPI Total listings"); 
});
// table of all 3 cities (antwerp, brussels, ghent) (filter pane) 
app.visualization.get('WwaGctr').then(function(vis){
    vis.show("Cities"); 
});
// table of all neibourhoods  in all cities (filter pane) (varies depending on previous selections)
app.visualization.get('JLAPJ').then(function(vis){
    vis.show("Neighbourhoods"); 
});
// Radar chart for Review scores per neighbourhood by city
app.visualization.get('FgvBsfP').then(function(vis){
    vis.show("Review scores per neighbourhood by city"); 
});
// Map chart of listings in all 3 cities (antwerp, brussels, ghent) (varies depending on previous selections)
app.visualization.get('FMssz').then(function(vis){
    vis.show("Map of listings"); 
});
// Bar chart for Number of listings per property type (varies depending on previous selections)
app.visualization.get('XZQhJm').then(function(vis){
    vis.show("Nbr of listings per property"); 
});
// Donout chart for distribution of room types (varies depending on previous selections)
app.visualization.get('WphDpR').then(function(vis){
    vis.show("Distribution of room types"); 
});
//Mekko chart for Average price by city and season (varies depending on previous selections)
app.visualization.get('aRyeqB').then(function(vis){
    vis.show("Average price by city and season"); 
});
//Line chart for Average price by season
app.visualization.get('HVwdR').then(function(vis){
    vis.show("Average price by season"); 
});
//Mekko chart for Average price by neighbourhood and city
app.visualization.get('HucdPk').then(function(vis){
    vis.show("Average price by neighbourhood and city"); 
});
// Line chart for  Availability over time (varies depending on previous selections)
app.visualization.get('kyAzX').then(function(vis){
    vis.show("Availability over time"); 
});
// Line chart for  Availability over time by season (varies depending on previous selections)
app.visualization.get('Ajgmey').then(function(vis){
    vis.show("Availability over time by season"); 
});

});
});


// Get the button element
var scrollToTopButton = document.getElementById('scrollToTopButton');

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the button when scrolling down
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { // Adjust the value to determine when to show the button
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Attach the scroll-to-top function to the button click event
scrollToTopButton.addEventListener('click', scrollToTop);


