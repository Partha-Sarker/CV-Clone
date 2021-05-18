$(document).ready(function () {
    let sizeChanging = false;
    let weatherShowing = false;
    // let currentTemp, feelingTemp, humidity;

    $('.headline').on('click', function () {
        if (sizeChanging)
            return;
        
        sizeChanging = true;
        const details = $(this).next();
        const expandIcon = $(this).find('.expand');
        const collapseIcon = $(this).find('.collapse');

        if (details.is(':visible')) {
            details.slideUp(300, () => {
                sizeChanging = false;
            });
            collapseIcon.fadeOut(140, () => {
                expandIcon.fadeIn(140);
            });            
        }
        else {
            details.slideDown(300, () => {
                sizeChanging = false;
            });
            expandIcon.fadeOut(140, () => {
                collapseIcon.fadeIn(140);
            });
        }

    });

    getWeatherData();

    $('#location').on('click', (e) => {
        e.preventDefault();
        if (weatherShowing)
            return;
        // if (currentTemp == undefined || feelingTemp == undefined || humidity == undefined)
        //     getWeatherData;
        weatherShowing = true;
        $('#weather').fadeIn(300).delay(4400).fadeOut(300, () => {
            weatherShowing = false;
        });
    });

    function updateWeatherUI(currentTemp, feelingTemp, humidity) {
        $('#current_temp').text(currentTemp + '℃');
        $('#feeling_temp').text(feelingTemp + '℃');
        $('#humidity').text(humidity + '%');
    }

    function getWeatherData() {
        const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=sylhet&appid=e0748595c399119a34571cab65adec9a';
        axios.get(weatherURL).then(function ({data: {main: weatherData}}) {
            // const weatherData = response['data']['main'];
            // currentTemp = (weatherData['temp'] - 273).toFixed(2);
            // feelingTemp = (weatherData['feels_like'] - 273).toFixed(2);
            // humidity = (weatherData['humidity']);
            let {temp, feels_like, humidity} = weatherData;
            temp = (temp - 273).toFixed(2);
            feels_like = (feels_like - 273).toFixed(2);
            console.log(temp, feels_like, humidity);
            updateWeatherUI(temp, feels_like, humidity);
        })
    }

});