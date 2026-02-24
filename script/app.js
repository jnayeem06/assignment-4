 
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobsCountText = document.getElementById("jobsCount");

const jobCardsContainer = document.getElementById("jobCards");
 
const filterAll = document.getElementById("filterAll");
const filterInterview = document.getElementById("filterInterview");
const filterRejected = document.getElementById("filterRejected");

 
totalCount.textContent = document.querySelectorAll(".job-card").length; // total jobs
interviewCount.textContent = 0;  
rejectedCount.textContent = 0;  
jobsCountText.textContent = document.querySelectorAll(".job-card").length + " jobs";

 
function updateCounts() {
  const allJobs = document.querySelectorAll(".job-card");
  let interviewJobs = 0;
  let rejectedJobs = 0;

  allJobs.forEach(job => {
    if(job.dataset.status === "interview") interviewJobs++;
    if(job.dataset.status === "rejected") rejectedJobs++;
  });

  totalCount.textContent = allJobs.length;
  interviewCount.textContent = interviewJobs;
  rejectedCount.textContent = rejectedJobs;
  jobsCountText.textContent = allJobs.length + " jobs";
}

 
jobCardsContainer.addEventListener("click", function(event) {
  const card = event.target.closest(".job-card");
  if(!card) return;

  const text = event.target.innerText.toUpperCase();
 
  if(text.includes("DELETE")) {
    card.remove();
    updateCounts();
    return;
  }

   
  if(text.includes("INTERVIEW")) {
    card.dataset.status = "interview";  
    updateCounts();  
    return;
  }

  
  if(text.includes("REJECTED") && !text.includes("DELETE")) {
    card.dataset.status = "rejected"; 
    updateCounts();  
    return;
  }
});

 
filterAll.addEventListener("click", () => {
  document.querySelectorAll(".job-card").forEach(c => c.style.display = "flex");
});

filterInterview.addEventListener("click", () => {
  document.querySelectorAll(".job-card").forEach(c => {
    c.style.display = c.dataset.status === "interview" ? "flex" : "none";
  });
});

filterRejected.addEventListener("click", () => {
  document.querySelectorAll(".job-card").forEach(c => {
    c.style.display = c.dataset.status === "rejected" ? "flex" : "none";
  });
});