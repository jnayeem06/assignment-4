 
var jobCards = document.querySelectorAll('.job-card');

 
var filterAllBtn = document.getElementById('filterAll');
var filterInterviewBtn = document.getElementById('filterInterview');
var filterRejectedBtn = document.getElementById('filterRejected');

 
var totalJobs = document.getElementById('totalCount');
var interviewJobs = document.getElementById('interviewCount');
var rejectedJobs = document.getElementById('rejectedCount');
var jobsText = document.getElementById('jobsCount');

 
for (var i = 0; i < jobCards.length; i++) {
    var card = jobCards[i];
    var deleteBtn = card.querySelector('button');
    deleteBtn.onclick = function() {
        var parentCard = this.parentNode.parentNode;  
        parentCard.remove();
        updateCounters();
    };
}

 
function filterJobs(status) {
    for (var i = 0; i < jobCards.length; i++) {
        var card = jobCards[i];
        if (status == 'all') {
            card.classList.remove('hidden');
        } else if (card.dataset.status == status) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    }
    updateCounters();
}

 
filterAllBtn.onclick = function() { filterJobs('all'); };
filterInterviewBtn.onclick = function() { filterJobs('interview'); };
filterRejectedBtn.onclick = function() { filterJobs('rejected'); };

 
function updateCounters() {
    var visibleCount = 0;
    var interviewCountNum = 0;
    var rejectedCountNum = 0;

    for (var i = 0; i < jobCards.length; i++) {
        var card = jobCards[i];
        if (!card.classList.contains('hidden')) {
            visibleCount++;
            if (card.dataset.status == 'interview') {
                interviewCountNum++;
            } else if (card.dataset.status == 'rejected') {
                rejectedCountNum++;
            }
        }
    }

    totalJobs.textContent = visibleCount;
    interviewJobs.textContent = interviewCountNum;
    rejectedJobs.textContent = rejectedCountNum;
    jobsText.textContent = visibleCount + ' jobs';
}

 
updateCounters();

 
 
 
 