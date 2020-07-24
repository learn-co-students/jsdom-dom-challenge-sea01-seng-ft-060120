document.addEventListener("DOMContentLoaded", function(e){

    const startInterval = setInterval(incrementCounter, 1000)
    const counter = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const submitButton = document.getElementById('submit');
    
    const likesUl = document.querySelector('.likes');

    function incrementCounter() {
        counter.innerText = parseInt(counter.innerText, 10) + 1
    }

    function decrementCounter() {
        counter.innerText = parseInt(counter.innerText, 10) - 1
    }

    function addLike() {
        let currentCount = counter.innerText;

        if (likesUl.querySelector(`li[data-num="${currentCount}"]`) === null) {
            let li = document.createElement('li');
            li.setAttribute("data-num", currentCount)
            li.innerHTML = `${currentCount} has been liked <span>1</span> time!`
            likesUl.appendChild(li);
        } else {
            let li = likesUl.querySelector(`li[data-num='${currentCount}']`);
            let span = li.querySelector('span');
            let spanCount = parseInt(span.innerText, 10) + 1;
            li.innerHTML = `${currentCount} has be liked <span>${spanCount}</span> times!`
        }
    }

    function pauseAll() {
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;

        clearInterval(startInterval);

        pauseButton.innerText = 'resume';
    }

    function resumeAll() {
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
        pauseButton.innerText = 'pause';
        startInterval = setInterval(incrementCounter, 1000);
    }

    document.addEventListener('click', function(e) {
        if (e.target.id === 'plus') {
            incrementCounter();
        } else if (e.target.id === 'minus'){
            decrementCounter();
        } else if (e.target.id === 'heart') {
            addLike();
        } else if (e.target.id === 'pause' && e.target.innerText === 'pause') {
            pauseAll();
        } else if (e.target.id === 'pause' && e.target.innerText === 'resume') {
            resumeAll();
        } else if (e.target.id === 'submit') {
            e.preventDefault()
            let commentInput = e.target.parentNode.querySelector('#comment-input').value;
            let p = document.createElement('p');
            let commentList = document.getElementById('list');
            p.innerText = commentInput;
            commentList.appendChild(p);
            e.target.parentNode.querySelector('#comment-input').value = null
        }
    })




})