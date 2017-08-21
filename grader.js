    function average(arr) {
        var result = 0;
        arr.forEach(function(element) {
            result += element;
        });
        result = Math.round(result / arr.length);
        console.log(result);
    }

    var scores = [90, 98, 89, 100, 100, 86, 94];
    var scores2 = [40, 65, 77, 82,80, 54, 73, 63, 95, 49];
    average(scores);
    average(scores2);