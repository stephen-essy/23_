const down_arrow = document.getElementById("down_arrow");
const up_arrow = document.getElementById("up_arrow");
function updateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  let montName;
  const daysofWeek = ["sun", "Mon", "Tue", "WED", "Thur", "Fri", "Sat"];
  const dayName = daysofWeek[now.getDay()];
  switch (month) {
    case "1":
      montName = "Jan";
      break;
    case "2":
      montName = "Feb";
      break;
    case "3":
      montName = "Mar";
      break;
    case "4":
      montName = "Apr";
      break;
    case "5":
      montName = "May";
      break;
    case "6":
      montName = "Jun";
      break;
    case "7":
      montName = "Jul";
      break;
    case "8":
      montName = "Aug";
      break;
    case "9":
      montName = "Sept";
      break;
    case "10":
      montName = "Oct";
      break;
    case "11":
      montName = "Nov";
      break;
    case "12":
      montName = "Dec";
      break;
    default:
      montName = "MM";
      break;
  }
  document.getElementById("date").textContent = day;
  document.getElementById("time").textContent = montName;
  document.getElementById("day").textContent = dayName;
  console.log(month);
  console.log(montName);
  console.log(dayName);
}
updateTime();
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
