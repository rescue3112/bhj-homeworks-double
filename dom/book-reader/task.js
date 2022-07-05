const controlBlock = document.querySelector(".book__controls");
const fonts = Array.from(controlBlock.querySelectorAll(".font-size"));
const colors = Array.from(controlBlock.querySelectorAll(".book__control_color .color"));
const backgrounds = Array.from(controlBlock.querySelectorAll(".book__control_background .color"));
const bookContent = document.querySelector(".book");


fonts.forEach(element => {
    element.addEventListener("click", toggleFontSize);
});

colors.forEach(element => {
    element.addEventListener("click", toggleColor);
});

backgrounds.forEach(element => {
    element.addEventListener("click", toggleBackground);
});

// Переключение размера шрифта
function toggleFontSize(event) {
    event.preventDefault();

    const button = event.target;   

    const oldItem = fonts.find(item => item.classList.contains("font-size_active"));
    oldItem.classList.remove("font-size_active");

    button.classList.add("font-size_active");
    
    const {size} = button.dataset;
    console.log(size);
    if (size === "small") {
        bookContent.classList.remove("book_fs-big");
        bookContent.classList.add("book_fs-small");        
      } else if (size === "big") {
        bookContent.classList.remove("book_fs-small");
        bookContent.classList.add("book_fs-big");
      } else {
        bookContent.classList.remove("book_fs-small", "book_fs-big");        
      }
}

// Переключение цвета текста
function toggleColor(event) {
    event.preventDefault();
    
    const button = event.target; 
    
    const oldItem = colors.find(item => item.classList.contains("color_active"));
    oldItem.classList.remove("color_active");

    button.classList.add("color_active");

    const {textColor} = button.dataset;
    
    if (textColor === "black") {
        bookContent.classList.remove("book_color-gray", "book_color-whitesmoke");
        bookContent.classList.add("book_color-black");        
      } else if (textColor === "whitesmoke") {
        bookContent.classList.remove("book_color-black", "book_color-gray");
        bookContent.classList.add("book_color-whitesmoke");
      } else {
        bookContent.classList.remove("book_color-black", "book_color-whitesmoke"); 
        bookContent.classList.add("book_color-gray");       
      }
}

// Переключение цвета фона
function toggleBackground(event) {
    event.preventDefault();

    const button = event.target;   

    const oldItem = backgrounds.find(item => item.classList.contains("color_active"));
    oldItem.classList.remove("color_active");

    button.classList.add("color_active");

    const {bgColor} = button.dataset;
    
    if (bgColor === "black") {
        bookContent.classList.remove("book_bg-gray", "book_bg-white");
        bookContent.classList.add("book_bg-black");        
      } else if (bgColor === "white") {
        bookContent.classList.remove("book_bg-black", "book_bg-gray");
        bookContent.classList.add("book_bg-white");
      } else {
        bookContent.classList.remove("book_bg-black", "book_bg-white"); 
        bookContent.classList.add("book_bg-gray");       
      }
}
