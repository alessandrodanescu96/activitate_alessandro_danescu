function runWeatherApp() {
  var weatherKey = "3e20f53fb2ef40e28bf95905221510";
  var weatherBaseUrl = "https://api.weatherapi.com/v1";

  var temperatureButtonEl = document.querySelector("#temperature-button");
  temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
  var temperatureContainerEl = document.querySelector("#temperature-container");

  function onTemperatureButtonClick() {
    var queryParams = "key=" + weatherKey + "&q=Bucharest";
    fetch(weatherBaseUrl + "/current.json?" + queryParams)
      .then(function (response) {
        return response.json();
      })
      .then(function (weather) {
        var myWeather = weather || {};
        var currentWeather = myWeather.current || {};
        var temperature = currentWeather.temp_c || null;
        if (temperature !== null) {
          temperatureContainerEl.style = null;
          var temperatureEl =
            temperatureContainerEl.querySelector("#temperature");
          temperatureEl.innerHTML = temperature;
        }
      });
  }
}

function runPostsApp() {
  var postsBaseUrl = "https://jsonplaceholder.typicode.com";
  var postsContainerEl = document.querySelector("#posts-container");

  function renderPostList(posts) {
    posts.forEach(function (post) {
      var postDiv = createPost(post);
      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
      }
    });
  }

  function createPost(post) {
    var div = document.createElement("div");
    //post.id
    div.innerHTML =
      "<div class='post-title'>" +
      "<h2>" +
      post.title +
      "</h2>" +
      "</div><p class='post-body'>" +
      post.body +
      "</p>";

    return div;
  }

  fetch(postsBaseUrl + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostList(posts);
    });
}

var pageInit = function () {
  runWeatherApp();
  runPostsApp();
};

window.addEventListener("load", function () {
  pageInit();
});

function createPost(post) 
  const modalCancelButton = document.querySelector("#cancel");
  const modalUpdateButton = document.querySelector("#updatePost");

  const div = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Post";
  const editButton = document.createElement("button");
  editButton.innerText = "Edit Post"


  //Pentru Delete

  deleteButton.onclick = function () {
  fetch(postsBaseUrl + "/posts/" + post.id, {
    method: "DELETE",
  }).then((response) => {
    if(response) {
      div.remove()
    }
    return response;
  });
  };


  editButton.onclick = function () {
     document
     .getElementById("updatePostModal")
     .classList.remove("modalHidden");
     document
     .getElementById("updatePostModal")
     .classList.add("modalDisplayed");

     const inputTitle = (document.getElementById("title").value = post.title);
     const inputBody = (document.getElementById("body").value = post.body);
 

  //Pentru Update 

  modalUpdateButton.onclick = ()  => {

    const updatedTitle = document.getElementById("title").value;
    const updatedBody = document.getElementsById("body").value;


    fetch(postsBaseUrl + "/posts/" + post.id, {
      method: "PUT",
      body: JSON.stringify ({
        title: updatedTitle,
        body: updatedBody,
      }),
      headers: {
      "Content-type" : "application/json ; charset=UTF-8",
      },
    })
  }

  then((response) => response.json());
  then((json) => console.log(json))
  .then(
    (div.innerHTML =
      "<div class = 'post-title'>" +
      "<h2>" +
      updatedTitle +
      "</h2>" +
      "</div> <p class = 'post-body'>" +
      updatedBody +
      "</p>")
  )
  .then((div.appendChild(deleteButton), div.appendChild(editButton)));
}