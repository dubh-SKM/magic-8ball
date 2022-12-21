

let video = document.getElementById('myVideo').playbackRate = .50;


const images = [
    '<img src="../magic-8ball/img/8ball-positive-without-a-doubt.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-yup.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-absolutely.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-fasho.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-most-definitely.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-most-likely.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-shouldnt-say.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-signs-positive.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-strong-possibility.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-think-so.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-you-already-know.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-positive-you-know-it.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-neutral-too-early.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-neutral-wouldnt-benefit.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-neutral-rephrase.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-neutral-cant-call.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-neutral-ask-again.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-negative-hell-nah.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-negative-aint-going-down.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-negative-impossible.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-negative-million-years.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-negative-negatory.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-negative-nope.png" id="8ball" alt="magic 8ball" width="50%">',
    '<img src="../magic-8ball/img/8ball-negative-yeah-right.png" id="8ball" alt="magic 8ball" width="50%">'
];


let initialImage = '<img src="../magic-8ball/img/8ball-blank.png" id="8ball" alt="magic 8ball" width="50%">';
document.getElementById('answers').innerHTML = initialImage;

let yup = '<img src="../magic-8ball/img/8ball-positive-yup.png" id="8ball" alt="magic 8ball" width="50%">';
let nope = '<img src="../magic-8ball/img/8ball-negative-nope.png" id="8ball" alt="magic 8ball" width="50%">';

let question = ""


function spinBall() {
    let randomImage = images[Math.floor(Math.random() * images.length)];
    let image = document.getElementById('answers').innerHTML;
    image = randomImage;
    document.getElementById('answers').innerHTML = image;
    question = document.getElementById('textInput').value;
    if (image === yup || image === nope) {
        document.getElementById('input').innerHTML = `<p class="returnedText">You asked:<br>${question}<br><br>If this is not the answer you were looking for, remember that everybodies got #choices</p>`;
    }
    else {
        document.getElementById('input').innerHTML = `<p class="returnedText">You asked:<br>${question}<br><br>Thank you for asking.  I hope you got the answer you were looking for.</p>`
        }
    return image;
}

function createButton() {
    let button = document.body.createElement('button')
    button.innerHTML = "Try Again"
    document.getElementById('input').appendChild(button);
}
createButton();
