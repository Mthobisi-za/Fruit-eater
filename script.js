document.querySelector("#eat").addEventListener("click", () => {
    var item = document.querySelector("#fooditem").value;
    var selection = document.querySelector("#kl");
    var t = selection.options[selection.selectedIndex].text;
    var p = document.querySelectorAll("img");
    for (var i = 0; i < p.length; i++) {
        var alt = p[i];
        var kl = p[i].classList;
        if (alt.alt == item) {

            kl.forEach((e) => {
                if (t == e) {
                    console.log(alt)
                    alt.remove()
                } else {

                }
            })
        } else {

        }
    }
})

//