let x = 9;
        let isEven;
        try {
            if (x > 0) {
                isEven = (x % 2 == 0) ? true : false;
                debugger;
            } else if (x <= 0) {
                throw "Error - Value of 0 or below.";
            }
            console.log(isEven);
        } catch (err) {
            console.log(err);
        } finally {
            console.log(x);
        }
 
