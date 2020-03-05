function change_text(text) {

}

var app = new Vue({
    el: '#app',
    data: {
        rotating_welcome_text_counter: 0,
        rotating_welcome_text_list: ["scroll down!", "check my work!", "contact me!"],
        rotating_welcome_text: 'scroll down!'
    },
    methods: {
        changeText: function() {
            this.rotating_welcome_text_counter += 1;
            this.rotating_welcome_text = this.rotating_welcome_text_list[this.rotating_welcome_text_counter % this.rotating_welcome_text_list.length];
        }
    }
})

setInterval(rotating_welcome_text_timer, 2300);


function rotating_welcome_text_timer() {
    var d = new Date();
    app.changeText();

    var rotating_welcome_text_baffle = baffle(".baffle-anim");

    rotating_welcome_text_baffle.text(currentText => app.rotating_welcome_text);

    rotating_welcome_text_baffle.set({
        characters: '▒█/▓ ░█<░ ▒░▓ ▒█/▒ ░████ >>▒ █<▒<░ ▒>░█▒ ███',
        speed: 60
    });

    rotating_welcome_text_baffle.start();
    rotating_welcome_text_baffle.reveal(1100);

}



// scroll down!
// check my work!
// contact me!