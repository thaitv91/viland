/**
 * Plugin's jquery functions
 * Version 2.24
 */
// Fix display of map in tabs
function fixDisplayInTabs(e,t){function n(){if(i!=null){clearTimeout(i)}if(e.is(":hidden")){i=setTimeout(n,s)}else{i=setTimeout(function(){r()},s)}}function r(){if(i!=null){clearTimeout(i)}data=e.data("gmap");if(data){var n=data.gmap;var r=data.markers;google.maps.event.trigger(n,"resize");e.gMapResp("fixAfterResize");if(t){for(var s=0;s<r.length;s++){google.maps.event.trigger(r[s],"close");google.maps.event.trigger(r[s],"click")}}}}var i=null;var s=100;if(e.is(":hidden")){n()}else{i=setTimeout(function(){n()},s*3)}}function openMarker(e,t){jQuery(".responsive-map").each(function(n){if(jQuery(this).data("gmap")&&e==n+1){var r=jQuery(this).data("gmap").markers;google.maps.event.trigger(jQuery(this).gMapResp("getMarker",t),"click")}})}