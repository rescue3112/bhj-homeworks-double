const chatElement = document.querySelector(".chat-widget");

//chatElement.classList.add("chat-widget_active");
const input = document.getElementById('chat-widget__input');
const messageContainer = document.querySelector('.chat-widget__messages');

let timerId = null;

chatElement.addEventListener('click', () => {
    chatElement.classList.add('chat-widget_active');
});

input.addEventListener('keydown', (e) => {
    if (!(e.key === 'Enter')) {
        return;
    }

    clearInterval(timerId);
    clientAnswer();
    botAnswer();
    timerId = setInterval(botWaitingMessage, 30000);
});

input.addEventListener('blur', () => {
    clearInterval(timerId);
});

// Handlers
function clientAnswer() {
    const msg = input.value;
    if (!msg) return;

    messageContainer.insertAdjacentHTML(
        'beforeend',
        getTemplateMessage(msg, ' message_client'),
    );

    input.value = '';
    autoScroll();
}

function botAnswer() {
    const botMessages = [
        'Доброго времени суток! ',
        'Я могу Вам помочь? Или Вы сами?',
        'Чего изволите?',
        'Это все? Мы с Вами закончили?',
        'Мне скучно и я устал!',
        'Мне надоело заниматься ерундой!',
        'Нет, так дело не пойдет! Досвидос!',
    ];

    const period = Math.random() * 1500;
    const botMsg = botMessages[Math.floor(Math.random() * botMessages.length)];
    const botMsgTemplate = getTemplateMessage(botMsg);

    setTimeout(() => {
        messageContainer.insertAdjacentHTML('beforeend', botMsgTemplate);
        autoScroll();
    }, period);
}

function botWaitingMessage() {
    const botMessages = [
        'Ну, и куда Вы пропали?',
        'Жду Ваших вопросов!',
        'Вы там думаете или что?',
    ];

    let index = Math.floor(Math.random() * botMessages.length);       
    messageContainer.insertAdjacentHTML('beforeend', getTemplateMessage(botMessages[index]));
    autoScroll();
}

// Автоскрол
function autoScroll() {
    messageContainer.lastElementChild.scrollIntoView();
}

// Шаблон сообщения
function getTemplateMessage(msg, type = '') {
    return `
    <div class="message${type}">
      <div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
      <div class="message__text">
        ${msg}
      </div>
    </div>
  `;
}
