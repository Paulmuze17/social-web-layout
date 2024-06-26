function makeUnactiveMenuItems() {
    const menuItems = document.querySelectorAll(".main-menu__item");
    menuItems.forEach(item => {
        item.classList.remove("main-menu__item--active");
    });
}

function clearNotificationsCounter() {
    const notifictionCounter = document.querySelector("#notifications .notification-count");
    if(notifictionCounter) {
        notifictionCounter.innerText = "";
        notifictionCounter.classList.add("is-hidden");
    }
}
function clearMessagesCounter() {
    const notifictionCounter = document.querySelector("#messages-notification .notification-count");
    if(notifictionCounter) {
        notifictionCounter.innerText = "";
        notifictionCounter.classList.add("is-hidden");
    }
}

function messagesSearchHandler() {
    const messagesWindow = document.querySelector(".messages");
    const messagesSearch = messagesWindow.querySelector("#messagesSearch");
    if(messagesSearch) {
        const messagesItems = messagesWindow.querySelectorAll(".message");
        const value = messagesSearch.value.toLowerCase();
        
        messagesItems.forEach(chat => {
            const nameElement = chat.querySelector("h5");
            // console.log(nameElement.textContent.toLocaleLowerCase())
            if(nameElement) {
                const name = nameElement.textContent.toLocaleLowerCase();

                if(name.indexOf(value) !== -1) {
                    chat.style.display = "flex";
                } else {
                    chat.style.display = "none";
                }
            }
        });


    }
}


function selectFontSizeItem(element, fontSize) {
    if(element) {
        
        const fontSizeItems = document.querySelectorAll(".choose-size span");
        fontSizeItems.forEach(size => {
            if(size === element) {
                size.classList.add("active");

            } else {
                size.classList.remove("active");

            }

            if(fontSize)
            {

                switch(fontSize) {
                    case "10px":
                        document.documentElement.style.setProperty("--sticky-top-left", "5.4rem");
                        document.documentElement.style.setProperty("--sticky-top-right", "5.4rem");
                        break;
                    case "13px":
                        document.documentElement.style.setProperty("--sticky-top-left", "5.4rem");
                        document.documentElement.style.setProperty("--sticky-top-right", "-7rem");
                        break;
                    case "16px":
                        document.documentElement.style.setProperty("--sticky-top-left", "-2rem");
                        document.documentElement.style.setProperty("--sticky-top-right", "-17rem");
                        break;
                    case "19px":
                        document.documentElement.style.setProperty("--sticky-top-left", "-5rem");
                        document.documentElement.style.setProperty("--sticky-top-right", "-25rem");
                        break;
                    case "22px":
                        document.documentElement.style.setProperty("--sticky-top-left", "-12rem");
                        document.documentElement.style.setProperty("--sticky-top-right", "-35rem");
                        break;
                }

                document.documentElement.style.fontSize = fontSize;

            }
        });

    }
}

function changeBgColor(element, settings) {
    if(!element) return;

    const bgItems = document.querySelectorAll(".background .choose-bg div");
    bgItems.forEach(bgItem => {
        bgItem.classList.remove("active");
    });

    
    document.documentElement.style.setProperty("--dark-color-lightness", settings.dark);
    document.documentElement.style.setProperty("--light-color-lightness", settings.light);
    document.documentElement.style.setProperty("--white-color-lightness", settings.white);

    element.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    // sidebar
    const menuItems = document.querySelectorAll(".main-menu__item");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            makeUnactiveMenuItems();
            item.classList.add("main-menu__item--active");

            const notifictionWin = document.querySelector(".notifications-popup");
            if(item.id !== "notifications") {
                if(notifictionWin) {
                    notifictionWin.classList.add("is-hidden")
                }
            } else {
                clearNotificationsCounter();
                if(notifictionWin) {
                    notifictionWin.classList.remove("is-hidden")
                }
            }
        });
    });

    // Messages
    const messagesNotification = document.querySelector("#messages-notification");
    const messagesWindow = document.querySelector(".messages");
    if(messagesNotification) {
        messagesNotification.addEventListener("click", () => {
            if(messagesWindow)
            {
                clearMessagesCounter();
                messagesWindow.style.boxShadow = "0 0 1rem var(--color-primary)";
                
                setTimeout(() => {
                    messagesWindow.style.boxShadow = "";
                    
                }, 2000);
            }
        });
    }
    
    // MessagesSearchBar
    const messagesSearch = messagesWindow.querySelector("#messagesSearch");
    messagesSearch.addEventListener("keyup", messagesSearchHandler);


    // Theme
    const themeMenuItem = document.querySelector("#theme-btn");
    const themeWin = document.querySelector(".customize-theme");
    if(themeMenuItem) {
        themeMenuItem.addEventListener("click", () => {
            if(themeWin) {
                themeWin.classList.remove("is-hidden");
            }
        });
  

    }
    if(themeWin) {
        themeWin.addEventListener("click", (event) => {
            if(event.target.classList.contains("customize-theme")) {
                themeWin.classList.add("is-hidden");
            }
        });
    }

    // theme fontsize
    const fontSizeItems = document.querySelectorAll(".choose-size span");
    fontSizeItems.forEach(size => {
        size.classList.remove("active");
        let fontSize;

        if(size.classList.contains("font-size-1")) {
            fontSize = "10px";
        } else if(size.classList.contains("font-size-2")) {
            fontSize = "13px";
        } else if(size.classList.contains("font-size-3")) {
            fontSize = "16px";
            size.classList.add("active");

        } else if(size.classList.contains("font-size-4")) {
            fontSize = "19px";
        } else if(size.classList.contains("font-size-5")) {
            fontSize = "22px";
        } else {
            fontSize = "16px";
        }

        size.addEventListener("click", () => {
            selectFontSizeItem(size, fontSize);
            // const elemFontSize = fontSize;
            // setFontSize(elemFontSize);
        });

        // document.body.style.fontSize = fontSize;
    });

    // theme color
    const colorItems = document.querySelectorAll(".choose-color span");
    colorItems.forEach(colorElement => {
        colorElement.addEventListener("click", () => {
            let primaryHue = 255;

            const colorItems = document.querySelectorAll(".choose-color span");
            colorItems.forEach(colorElement => {
                colorElement.classList.remove("active");
            });

            if(colorElement.classList.contains("color-1")) {
                primaryHue = 255;
            } else if (colorElement.classList.contains("color-2")) {
                primaryHue = 52;
            } else if (colorElement.classList.contains("color-3")) {
                primaryHue = 352;
            } else if (colorElement.classList.contains("color-4")) {
                primaryHue = 152;
            } else if (colorElement.classList.contains("color-5")) {
                primaryHue = 202;
            }

            colorElement.classList.add("active");
            document.documentElement.style.setProperty('--primary-color-hue', primaryHue);

        })
    });

    // theme bg
    const bgColorArray = [
        {
            name: "bg-1",
            dark: "17%",
            white: "100%",
            light: "95%",
        },
        {
            name: "bg-2",
            dark: "95%",
            white: "20%",
            light: "15%",
        },
        {
            name: "bg-3",
            dark: "95%",
            white: "10%",
            light: "0%",
        },
    ];
    const bgItems = document.querySelectorAll(".background .choose-bg div");
    bgItems.forEach(bgItem => {
        bgItem.addEventListener("click", () => {
            let bgSettings = {};

            for (const bgColor of bgColorArray) {
                if(bgItem.classList.contains(bgColor.name)) {
                    bgSettings = bgColor;
                }
            }

            changeBgColor(bgItem, bgSettings);
        });
    });

});