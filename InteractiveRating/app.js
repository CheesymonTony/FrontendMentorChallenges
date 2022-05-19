const ratings = document.querySelectorAll('.rating-items');
const submit = document.querySelector('.submission');
const botSection = document.querySelector('.bot-half');
const topSection = document.querySelector('.top-half');
const botSectionSubmitted = document.querySelector('.bot-half-submitted');
const topSectionSubmitted = document.querySelector('.top-half-submitted');
const ratingSubmission = document.querySelector('.rating-entry');

let ratingToSend;

ratings.forEach(ratingItem => ratingItem.addEventListener('click', function (e) 
{
    ratingToSend = ratingItem.dataset.rating;
    ratingItem.classList.add('active');
    for (let ratingItemCheck of ratings){
        if (ratingItemCheck !== ratingItem){
            ratingItemCheck.classList.remove('active');
        }
    }
}))

submit.addEventListener('click', function(){
    if (ratingToSend !== undefined){
        botSection.classList.add('hidden');
        botSectionSubmitted.classList.remove('hidden');
        topSection.classList.add('hidden');
        topSectionSubmitted.classList.remove('hidden');
        ratingSubmission.textContent = ratingToSend;
    } else {
        ratings.forEach(ratingItem => ratingItem.classList.add('alert'));
        ratings.forEach(ratingItem => ratingItem.addEventListener('transitionend', function(e){
            ratingItem.classList.remove('alert');
        }));
    }
})

