const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
    'pic1.jpg' : 'A girls eye',
    'pic2.jpg' : 'cool grey image',
    'pic3.jpg' : 'Purple ting',
    'pic4.jpg' : 'Section of wall',
    'pic5.jpg' : 'Big moth'
  }
  
/* Looping through images */
for(const image of images){
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
