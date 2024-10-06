function isValid(st) {
    let parts = st.split('.');
    if (parts.length !== 4) {
        return false;
    }

    for (let pt of parts) {
        if (!/^\d+$/.test(pt) || (pt.length > 1 && pt[0] === '0')) {
            return false;
        }
        let num = parseInt(pt);
        if (num < 0 || num > 255) {
            return false;
        }
    }

    return true;
}

function validate() {
    let st = prompt("Enter an IPv4 address:");
    console.log("Is Valid?", isValid(st));
}

validate();

// Enter an IPv4 address:255.255.255
// Is Valid? false