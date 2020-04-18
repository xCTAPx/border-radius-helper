let rows = document.getElementsByClassName("row"),
    example = document.getElementById("example"),
    tl = 0, tr = 0, br = 0, bl = 0;

function fixValue(elem, range) {
    elem.value = range.value;
    switch (range.id) {
        case "rangeTL":
            tl = range.value;
            break;
        case "rangeTR":
            tr = range.value;
            break;
        case "rangeBR":
            br = range.value;
            break;
        case "rangeBL":
            bl = range.value;
            break;
    };

    example.style.borderRadius = `${tl}px ${tr}px ${bl}px ${br}px`;
}

function fixRange(elem, range) {
    range.value = elem.value;

    switch (elem.id) {
        case "inputTL":
            tl = elem.value;
            break;
        case "inputTR":
            tr = elem.value;
            break;
        case "inputBR":
            br = elem.value;
            break;
        case "inputBL":
            bl = elem.value;
            break;
    };

    example.style.borderRadius = `${tl}px ${tr}px ${bl}px ${br}px`;
}