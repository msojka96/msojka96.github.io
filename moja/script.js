document.onreadystatechange = function () {

    Hide = ((text) => {
        text.forEach((text_list) => {
            text_list.hidden = true;
        });
    });

    if (document.readyState === "interactive") {

        text = document.querySelectorAll(".text");
        buttons = document.querySelectorAll(".button");
        button_first = document.querySelector("#description");

        Hide(text);

        button_first.hidden = false;
    }

    Search = ((name) => {
        text.forEach((text_list) => {
            if (text_list.id === name) {
                if (text_list) {
                    text_list.hidden = false;
                }
                else {
                    text_list.hidden = true;
                }
            }
        });
    });

    Active = ((button) => {
        buttons.forEach((button_list) => {
            button_list.classList.remove("active");
        });
        button.classList.add("active");
    });

    OnClick_Button = ((button, name) => {
        button.onclick = () => {
            Active(button);

            if (name === "button_description") {
                Hide(text);
                Search("description");
            }

            if (name === "button_programs") {
                Hide(text);
                Search("programs");
            }

            if (name === "button_contact") {
                Hide(text);
                Search("contact");
            }

        };
    });

    buttons.forEach((button_list) => {
        OnClick_Button(button_list, button_list.id);
    });
};