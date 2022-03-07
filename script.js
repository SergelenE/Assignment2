// // Use window.addEventListener("scroll",) Event listener.
// // then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// // For your mind: object.classList.add('class') this method is add class on selected element
// // e.target.scrollingElement.scrollTop use that method when track scrolling amount

function scrollDetect(event) {
  if (event.target.scrollingElement.scrollTop > 245) {
    document.querySelector(".navbar").classList.add("fixed-top");
  } else {
    document.querySelector(".navbar").classList.remove("fixed-top");
  }
}
// scrollDetect();
window.addEventListener("scroll", scrollDetect);

// // Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener

// // Define Play button variable

// // Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// // Define finsetModal then use Bootstrap modal Object request

// // Create Click Event Listener on Play button variable (you already created above)
// // add finsetModal.show() on callback function
// // Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code

// // Create an XMLHttpRequest object
// // Create a callback function
// // Open a GET request and use data from ../data/company_intro.json
// // Send the request

let url = "data/company_intro.json";

let xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.readyState === 4) {
    const data1 = JSON.parse(xhr.responseText);
    generateHTML(data1.data);
  }
};

xhr.open("GET", url);
xhr.send();

function generateHTML(value) {
  const iishee = document.querySelector(".iisheehine");

  value.map((e) => {
    iishee.innerHTML += ` 
  <div class="col-12 col-sm-4">
    <div class="card card-introduction">
      <img src="${e.thumbnail}" class="card-img-top" alt="...">
      <div>
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text">${e.content}</p>
        <a class="learnmore" href="#">Learn more</a>
      </div>
    </div>
  </div>`;
  });
}

// /*  Add subscription email action. When subscription POST request is successful,
//     change the email element and subscribe button into "Your subscription is successful" Text.
//     POST request should be done by AJAX request. We need a POST request end point for subscription email.
// */
// // Define Subscribe by ID name

// // Add CLICK Event Listener on the button
// // Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create
