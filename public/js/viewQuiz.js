const fetchUrl = "http://localhost:3100/api/fetchQuestions";

let receivedQuizList = [];

const clearQuizList = function () {
  let containerDiv = document.getElementById("quizList");
  containerDiv.innerHTML = "";
}

const createQuizListItem = function (
  quizName,
  status,
  dateCreated,
  quizAuthor
) {
  let containerDiv = document.getElementById("quizList");

  let mainDiv = document.createElement("div");
  let leftSide = document.createElement("div");
  let rightSide = document.createElement("div");
  let h31 = document.createElement("h3");
  let p1 = document.createElement("p");
  let h32 = document.createElement("h3");
  let p2 = document.createElement("p");

  mainDiv.classList.add("quizItem");
  leftSide.classList.add("left-side");
  rightSide.classList.add("right-side");

  h31.innerHTML = quizName;
  p1.innerHTML = status;
  h32.innerHTML = dateCreated;
  p2.innerHTML = quizAuthor;

  leftSide.appendChild(h31);
  leftSide.appendChild(p1);
  rightSide.appendChild(h32);
  rightSide.appendChild(p2);

  mainDiv.appendChild(leftSide);
  mainDiv.appendChild(rightSide);

  containerDiv.appendChild(mainDiv);
};

function searchQuizes() {
  let searchName = document.getElementById("searchValue").value;
  clearQuizList();
  receivedQuizList.forEach((item)=>{
    if (item['Quiz Name'].toLowerCase().includes(searchName.toLowerCase()) && item['Status'] === 'Public') {
      createQuizListItem(
        item["Quiz Name"],
        item["Status"],
        item["Date"],
        item["Author"]
      );
    }
  });
}

function fetchQuestions() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      receivedQuizList = JSON.parse(this.responseText);
      receivedQuizList.forEach((item) => {
        if (item.Status === "Public") {
          createQuizListItem(
            item["Quiz Name"],
            item["Status"],
            item["Date"],
            item["Author"]
          );
        }
      });
    }
  };
  xhttp.open("GET", fetchUrl, true);
  xhttp.send();
}

fetchQuestions();
