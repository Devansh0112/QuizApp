const fetchUrl = "http://localhost:3100/api/fetchQuestions";

function fetchQuestions() {
  let data = { name: "Entrance Quiz" };
  console.log(data);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let name = JSON.parse(this.responseText);
      console.log(name["Quiz Name"]);
    }
  };
  xhttp.open("POST", fetchUrl, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

fetchQuestions();
