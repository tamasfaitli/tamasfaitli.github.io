let number_of_bckg_shapes = 10;

var nav_bar = new Vue({
    el: '#nav-bar',
    data: {
        logo_res: "res/logo.svg"
    },
    methods: {
        changeImageSrc: function() {
            this.logo_res = "res/logo-hovered.svg"
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        rotating_welcome_text_counter: 0,
        rotating_welcome_text1_list: ["scroll", "check", "contact"],
        rotating_welcome_text2_list: [" down!", " my work!", " me!"],
        rotating_welcome_text1: "scroll",
        rotating_welcome_text2: " down!",
        weights: [],
        background_shapes: []
    },
    methods: {
        changeText: function() {
            this.rotating_welcome_text_counter += 1;
            this.rotating_welcome_text1 = this.rotating_welcome_text1_list[this.rotating_welcome_text_counter % this.rotating_welcome_text1_list.length];
            this.rotating_welcome_text2 = this.rotating_welcome_text2_list[this.rotating_welcome_text_counter % this.rotating_welcome_text2_list.length];
        },
        changeFontWeight: function() {

        }
    }
})


// initialize stuff
window.onload = function() {
    initFontCheckerList();
    initBackgroundShapes();
}

//initFontCheckerList
function initFontCheckerList() {
    for (i = 0; i < 10; i++) {
        var weight = {
            text: "Text " + String((i + 1) * 10),
            fontweight: ((i + 1) * 100)
        };

        app.weights.push(weight);
    }
}

function initBackgroundShapes() {
    for (i = 0; i < number_of_bckg_shapes; i++) {
        var bckg_shape = {

        };
    }
}


setInterval(rotating_welcome_text_timer, 2300);


function rotating_welcome_text_timer() {
    var d = new Date();
    app.changeText();


    var rotating_welcome_text_baffle1 = baffle("#baffle1");
    var rotating_welcome_text_baffle2 = baffle("#baffle2");

    var baffles = [rotating_welcome_text_baffle1, rotating_welcome_text_baffle2];
    app_texts = [app.rotating_welcome_text1, app.rotating_welcome_text2];

    baffles.forEach(baffle => {
        baffle.text(currentText => app_texts[baffles.indexOf(baffle)])

        baffle.set({
            characters: '▒█/▓ ░█<░ ▒░▓ ▒█/▒ ░████ >>▒ █<▒<░ ▒>░█▒ ███',
            speed: 60
        })

        baffle.start();
        baffle.reveal(1100);
    });
    /*
        rotating_welcome_text_baffle1.text(currentText => app.rotating_welcome_text1);
        rotating_welcome_text_baffle2.text(currentText => app.rotating_welcome_text2);

        rotating_welcome_text_baffle1.set({
            characters: '▒█/▓ ░█<░ ▒░▓ ▒█/▒ ░████ >>▒ █<▒<░ ▒>░█▒ ███',
            speed: 60
        });

        otating_welcome_text_baffle2.set({
            characters: '▒█/▓ ░█<░ ▒░▓ ▒█/▒ ░████ >>▒ █<▒<░ ▒>░█▒ ███',
            speed: 60
        });

        rotating_welcome_text_baffle.start();
        rotating_welcome_text_baffle.reveal(1100);
    */
}



// scroll down!
// check my work!
// contact me!