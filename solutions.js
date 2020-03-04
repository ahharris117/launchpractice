// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left');
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages');
document.getElementsByClassName('groups');
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByTagName('h5')[0].innerHTML= 'Least Favs'
// Exercise 5): Find the first of the ads in the sidebar and hide it.
let adOne = document.getElementsByClassName('ad-slot')[0];
adOne.style.visibility ='hidden';
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
adOne.style.visibility = 'visible';
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let adTwo = document.getElementsByClassName('ad-slot')[1];
adTwo.getElementsByTagName('img')[0].setAttribute('src', 'http://placebear.com/200/300')
// Exercise 8): Find Sam's post and change its text to something incredible.
let samPost = document.getElementsByClassName('media-body')[4];
samPost.getElementsByTagName('p')[0].innerHTML = "Targetting this element is incredible";
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let posts =  document.getElementById('list-of-posts');
let firstPost =  posts.getElementsByTagName('li')[0];
firstPost.classList.add('post-liked');
// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.

let secondPost = posts.getElementsByTagName('li')[7];
secondPost.classList.add('post-shared');
// Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share.

secondPost.classList.remove('post-shared');
