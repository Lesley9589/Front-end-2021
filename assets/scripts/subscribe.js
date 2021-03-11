function subscribeAccount() {
  let form = document.getElementById("form-sub");
  const inputs = form.getElementsByTagName("input");

  fetch("https://shrouded-brook-12387.herokuapp.com/add-new2/", {
    method: "POST",
    body: JSON.stringify({
      emailad: inputs[0].value,
    }),
    headers: {
      "Content-type": "application/json; chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Subscribed Successfully!");
      console.log(json);
      form.reset();
    });
}
