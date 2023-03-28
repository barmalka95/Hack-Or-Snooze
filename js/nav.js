"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
  
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $loginForm.hide();
  $signupForm.hide();
}

// Hide everything but profile on click on 'profile'
function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);


// when user click on the new submit link in the navbar call add-story-form
function navSubmitClick(evt) {
  console.debug('navSubmitClick', evt);
  hidePageComponents();


  $allStoriesList.show();
  // $newStoryForm.show();
  $newStoryForm.slideToggle();
}

const newButton = document.querySelector('#newButton');
newButton.addEventListener('click', navSubmitClick);

// open favorites when click
function favoritesClick(evt) {
  console.debug('favoritesClick', evt);
  hidePageComponents();
  putFavoritesListOnPage();
}

const favoritesNav = document.querySelector('#favorites');
favoritesNav.addEventListener('click', favoritesClick);


// show My Stories on clicking 'my stories'
function navMyStories(evt) {
  console.debug('navMyStories', evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}

$body.on('click', '#my-stories', navMyStories);
