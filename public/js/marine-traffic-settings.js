  var width = "100%"; // the width of the embedded map in pixels or percentage
  var height = "500"; // the height of the embedded map in pixels or percentage
  var border = "0"; // the width of the border around the map (zero means no border)
  var shownames = "false"; // to display ship names on the map (true or false)
  // var latitude='37.4460';	// the latitude of the center of the map, in decimal degrees
  // var longitude='24.9467';	// the longitude of the center of the map, in decimal degrees
  var zoom = "2"; // the zoom level of the map (values between 2 and 17)
  maptype = "0"; // use 0 for Normal Map, 1 for Satellite, 2 for OpenStreetMap
  var trackvessel = "248555000"; // MMSI of a vessel (note: vessel will be displayed only if within range of the system) - overrides "zoom" option
  var fleet = "kalamotitrader@gmail.com"; // the registered email address of a user-defined fleet (user's default fleet is used)

  var container = document.querySelector('.map');
  var template = document.createElement('template');


  // if ("https:" == document.location.protocol) {
  //     /* secure */
  //     var src = 'https://www.marinetraffic.com/';
  // } else {
  //     /* unsecure */
  //     var src = 'http://www.marinetraffic.com/';
  // }
  var src = 'https://www.marinetraffic.com/';

  if ((window.latitude === undefined) && (window.longitude === undefined) && ((window.fleet !== undefined && window.fleet != "") || (window.fleet_id !== undefined && window.fleet_id != ""))) {
      window.latitude = 0;
      window.longitude = 0;
  }

  if (typeof window.mtembedcode != "undefined") {
      var overridenLatLon = '';
      if (window.latitude !== undefined && window.latitude != '' && window.longitude !== undefined && window.longitude != '') {
          if (window.zoom === undefined) {
              window.zoom = 3;
          }
          overridenLatLon = '/zoom:' + ((window.zoom === undefined) ? '' : zoom) + '/centery:' + ((window.latitude === undefined) ? '' : latitude) + '/centerx:' + ((window.longitude === undefined) ? '' : longitude);
      }
      // document.write('<iframe name="marinetraffic" id="marinetraffic"' + ' width="' + ((window.width === undefined) ? '550' : width) + '"' + ' height="' + ((window.height === undefined) ? '300' : height) + '"' + ' scrolling="no" frameborder="' + ((window.border === undefined) ? '0' : border) + '"' + ' src="' + src + ((window.language === undefined) ? 'en' : language) + '/ais/customembed' + overridenLatLon + '/mmsi:' + ((window.trackvessel === undefined) ? '0' : trackvessel) + ((window.trackimo !== undefined) ? '/trackimo:' + window.trackimo : '') + '/mtembedcode:' + window.mtembedcode + '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + '</iframe>\n');
      template.innerHTML = '<iframe name="marinetraffic" id="marinetraffic"' + ' width="' + ((window.width === undefined) ? '550' : width) + '"' + ' height="' + ((window.height === undefined) ? '300' : height) + '"' + ' scrolling="no" frameborder="' + ((window.border === undefined) ? '0' : border) + '"' + ' src="' + src + ((window.language === undefined) ? 'en' : language) + '/ais/customembed' + overridenLatLon + '/mmsi:' + ((window.trackvessel === undefined) ? '0' : trackvessel) + ((window.trackimo !== undefined) ? '/trackimo:' + window.trackimo : '') + '/mtembedcode:' + window.mtembedcode + '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + '</iframe>\n';
  } else {
    // document.write('<iframe name="marinetraffic" id="marinetraffic"' + ' width="' + ((window.width === undefined) ? '550' : width) + '"' + ' height="' + ((window.height === undefined) ? '300' : height) + '"' + ' scrolling="no" frameborder="' + ((window.border === undefined) ? '0' : border) + '"' + ' src="' + src + ((window.language === undefined) ? 'en' : language) + '/ais/embed' + '/zoom:' + ((window.zoom === undefined) ? '3' : zoom) + '/centery:' + ((window.latitude === undefined) ? '36' : latitude) + '/centerx:' + ((window.longitude === undefined) ? '23' : longitude) + '/maptype:' + ((window.maptype === undefined) ? '4' : maptype) + '/shownames:' + ((window.shownames === undefined) ? 'false' : shownames) + '/mmsi:' + ((window.trackvessel === undefined) ? '0' : trackvessel) + '/shipid:' + ((window.trackshipid === undefined) ? '0' : trackshipid) + '/fleet:' + ((window.fleet === undefined) ? '' : fleet) + '/fleet_id:' + ((window.fleet_id === undefined) ? '' : fleet_id) + '/vtypes:' + ((window.vtypes === undefined) ? '' : vtypes) + '/showmenu:' + ((window.showmenu === undefined) ? '' : showmenu) + '/remember:' + ((window.remember === undefined) ? 'false' : remember) + '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + '</iframe>\n');

    template.innerHTML = '<iframe name="marinetraffic" id="marinetraffic"' + ' width="' + ((window.width === undefined) ? '550' : width) + '"' + ' height="' + ((window.height === undefined) ? '300' : height) + '"' + ' scrolling="no" frameborder="' + ((window.border === undefined) ? '0' : border) + '"' + ' src="' + src + ((window.language === undefined) ? 'en' : language) + '/ais/embed' + '/zoom:' + ((window.zoom === undefined) ? '3' : zoom) + '/centery:' + ((window.latitude === undefined) ? '36' : latitude) + '/centerx:' + ((window.longitude === undefined) ? '23' : longitude) + '/maptype:' + ((window.maptype === undefined) ? '4' : maptype) + '/shownames:' + ((window.shownames === undefined) ? 'false' : shownames) + '/mmsi:' + ((window.trackvessel === undefined) ? '0' : trackvessel) + '/shipid:' + ((window.trackshipid === undefined) ? '0' : trackshipid) + '/fleet:' + ((window.fleet === undefined) ? '' : fleet) + '/fleet_id:' + ((window.fleet_id === undefined) ? '' : fleet_id) + '/vtypes:' + ((window.vtypes === undefined) ? '' : vtypes) + '/showmenu:' + ((window.showmenu === undefined) ? '' : showmenu) + '/remember:' + ((window.remember === undefined) ? 'false' : remember) + '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + '</iframe>\n';
  }

  container.appendChild(template.content);

