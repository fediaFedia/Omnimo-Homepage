day=new Date()     //..get the date
 
x=day.getHours()   //..get the hour
 
if(x>=1 && x<7) {
   document.write('<style type="text/css">header{background-image: url(img/daylight/midnight.jpg) !important;}.arrow-down{border-top: 20px solid #242610;}"></style>')
} else if(x>=7 && x<11) {
   document.write('<style type="text/css">header{background-image: url(img/daylight/sunrise.jpg) !important;}.arrow-down{border-top: 20px solid #3F2109;}"></style>')
} else if(x>=11 && x<18) {
   document.write('<style type="text/css">header{background-image: url(img/daylight/sunrise.jpg) !important;}.arrow-down{border-top: 20px solid #152638;}"></style>')
} else if (x>=18 && x<22) {
   document.write('<style type="text/css">header{background-image: url(img/daylight/sunrise.jpg) !important;}.arrow-down{border-top: 20px solid #060606;}"></style>')
} else {
   document.write('<style type="text/css">header{background-image: url(img/daylight/night.jpg) !important;}.arrow-down{border-top: 20px solid #0A1010;}"></style>')
}