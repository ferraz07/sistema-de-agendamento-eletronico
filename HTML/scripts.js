var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
const debounce = (fn) => {
    let frame;

    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    };
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener('scroll', debounce(storeScroll), {passive: true});

storeScroll();

const el = document.getElementById('formP');

const formS = document.getElementById('formS');
const formA = document.getElementById('formA');
const formAa = document.getElementById('formAa');
const formAaa = document.getElementById('formAaa');
const formAaaa = document.getElementById('formAaaa');
const formAaaaa = document.getElementById('formAaaaa');



el.addEventListener('change', function handleChange(event) {
    if (event.target.value != 'show') {
        formS.style.display = 'block';
    } else {
        formS.style.display = 'visible';
    }
});
el.addEventListener('change', function handleChange(event) {
    if (event.target.value != 'show') {
        formA.style.display = 'block';
    } else {
        formA.style.display = 'visible';
    }
});
el.addEventListener('change', function handleChange(event) {
    if (event.target.value != 'show') {
        formAa.style.display = 'block';
    } else {
        formAa.style.display = 'visible';
    }
});
el.addEventListener('change', function handleChange(event) {
    if (event.target.value != 'show') {
        formAaa.style.display = 'block';
    } else {
        formAaa.style.display = 'visible';
    }
});
el.addEventListener('change', function handleChange(event) {
    if (event.target.value != 'show') {
        formAaaa.style.display = 'block';
    } else {
        formAaaa.style.display = 'visible';
    }
});
el.addEventListener('change', function handleChange(event) {
    if (event.target.value != 'show') {
        formAaaaa.style.display = 'block';
    } else {
        formAaaaa.style.display = 'visible';
    }
});

