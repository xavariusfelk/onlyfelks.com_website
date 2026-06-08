const error_text_box = document.getElementById('error_text');

const error_messages = [
    "Rawr? How did you end up here?",
    "Rawr rawr rawr rawr?",
    "404? Is it a type of a snack?",
    "Hi! Go back!",
    "A! I promise I didn't eat this page!",
    "Mmmm, tasty page :)"
];

const selected_error_message = error_messages[Math.floor(Math.random() * error_messages.length)];


error_text_box.innerHTML = selected_error_message;