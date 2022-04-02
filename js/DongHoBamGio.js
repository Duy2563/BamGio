window.onload = function () {
    var seconds = 00;

    var tens = 00;

    var secondss = document.getElementById('seconds');

    var tenss = document.getElementById('tens');

    var button_start = document.getElementById('button_start');

    var button_stop = document.getElementById('button_stop');

    var button_reset = document.getElementById('button_reset');

    var Interval;

    button_start.onclick = function () {
        //Tạm dừng thời gian đang chạy
        clearInterval(Interval);
        //Sau 0.1 tích tắc sẽ chạy đồng hồ và chạy mãi
        Interval = setInterval(startTimer, 10)

    }

    button_stop.onclick = function () {
        //Tạm dừng thời gian đang chạy
        clearInterval(Interval);
    }

    button_reset.onclick = function () {
        //Tạm dừng thời gian đang chạy
        clearInterval(Interval);
        //Cho biến seconds thành 0
        seconds = "00";
        //Cho biến tens thành 0
        tens = "00";
        //Gán biến secondss thành 0
        secondss.innerHTML = seconds;
        //Gán biến tenss thành 0
        tenss.innerHTML = tens;
    }
    function startTimer() {
        // Biến tens ++
        tens++;
        // Nếu biến tens <=9 thì vẫn bằng 0
        if (tens <= 9) {
            tenss.innerHTML = '0' + tens;
        }
        //Nếu biến tens>9 thì gán biến tens++ vào
        if (tens > 9) {
            tenss.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;

            secondss.innerHTML = '0' + seconds;

            tens = 0;

            tenss.innerHTML = '0' + 0;
        }
        // nếu biến seconds >9 thì sẽ gán vào biến secondss
        if (seconds > 9) {
            secondss.innerHTML = seconds;
        }
    }












}