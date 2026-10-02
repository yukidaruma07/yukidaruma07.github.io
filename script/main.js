const filterBox = document.querySelectorAll(".tag_button");
const items = document.querySelectorAll(".tag_item");
const input = document.querySelectorAll(".input_word");
const tagName = document.querySelectorAll(".tag_name");

const list = [];

filterBox.forEach((filter) => {
    filter.addEventListener("click", (e) => {
        const selectFilter = filter.dataset.filter;
        if (list.includes(selectFilter)) {
            const index = list.indexOf(selectFilter);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        else {
            if (selectFilter == "All") {
                list.length = 0;
                list.push("All");
            }
            else {
                list.push(selectFilter);
            }
        }


        items.forEach((item) => {
            const tag = item.dataset.tag;
            const splitTag = tag.split(",");

            let hide = true;
            splitTag.forEach((i) => {
                list.forEach((a) => {
                    if (i == a || a == "All") {
                        hide = false;
                    }
                });
            });

            if (hide) {
                item.style.display = "none";
            }
            else {
                item.style.display = "flex";
            }
        });
    });

    input.forEach((input_) => {
        input_.addEventListener("input", (e) => {
            const selectFilter = input_.value;
            items.forEach((item) => {
                if (tagName.textContent == selectFilter) {
                    item.style.display = "flex";
                }
                else {
                    if (selectFilter == "") {
                        item.style.display = "flex";
                    }
                    else {
                        item.style.display = "none";
                    }
                }
            });
        })
    });
});