export default function codeSelector(code) {
    if (code < 300) {
        return 'thunderstorm';
    } else if (code < 400) {
        return 'rainy_light';
    } else if (code < 505) {
        return 'rainy';
    } else if (code === 511) {
        return 'rainy_snow';
    } else if (code < 600) {
        return 'rainy';
    } else if (code < 700) {
        return 'cloudy_snowing  ';
    } else if (code < 780) {
        return 'foggy';
    }else if (code === 781) {
        return 'tornado'
    } else if (code == 800) {
        return 'sunny';
    } else if (code < 803) {
        return 'partly_cloudy_day';
    } else if (code < 805) {
        return 'cloudy';
    }
}