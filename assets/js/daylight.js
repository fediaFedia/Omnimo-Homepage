day=new Date()     //..get the date
 
x=day.getHours()   //..get the hour
 
if(x>=1 && x<7) {
   document.write('<style type="text/css">body{background-image: url(assets/img/midnight.jpg);}.arrow-down{border-top: 20px solid #242610;}"></style>')
} else if(x>=7 && x<11) {
   document.write('<style type="text/css">body{background-image: url(assets/img/morning.jpg);}.arrow-down{border-top: 20px solid #3F2109;}"></style>')
} else if(x>=11 && x<18) {
   document.write('<style type="text/css">body{background-image: url(assets/img/day.jpg);}.arrow-down{border-top: 20px solid #152638;}"></style>')
} else if (x>=18 && x<22) {
   document.write('<style type="text/css">body{background-image: url(assets/img/evening.jpg);}.arrow-down{border-top: 20px solid #060606;}"></style>')
} else {
   document.write('<style type="text/css">body{background-image: url(assets/img/night.jpg);}.arrow-down{border-top: 20px solid #0A1010;}"></style>')
}