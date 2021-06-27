
var images = [ "https://th.bing.com/th/id/OIP.0Lj9WGkzuIUefZJi5k5j-QHaEo?pid=Api&rs=1",
  "https://th.bing.com/th/id/OIP.PdADQe4ganFSOMe05JfYhAHaEo?pid=Api&rs=1", "http://4.bp.blogspot.com/-2j8EVE2rPfs/UYDPbNbDr3I/AAAAAAAABHQ/0Irk6WfORXw/s1600/BingWallpaper-2013-05-01.jpg",
  "https://th.bing.com/th/id/OIP.nYorJDUXt5aZmS3FJA2cPwHaEK?pid=Api&rs=1",
"https://th.bing.com/th/id/OIP.1bD2gKbS6k8ZF5mN4e8ziQHaEo?pid=Api&rs=1",
  "https://th.bing.com/th/id/OIP.Zv6uilbd-FH0-ceNaJ4YmgHaEK?pid=Api&rs=1",
  "https://th.bing.com/th/id/OIP.rBH41ZB1ZDjcA3nU4vja1AHaEK?pid=Api&rs=1"
];

var i = 0;
function nextslide() {
  if(i == 7) { i=0; }
  document.getElementById("album").src = images[i];
  i++;
                    
 
}