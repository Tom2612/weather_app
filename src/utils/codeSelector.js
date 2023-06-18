export default function codeSelector(code) {
    if (code < 300) {
        return '11d';
    } else if (code < 400) {
        return '09d';
    } else if (code < 505) {
        return '10d';
    } else if (code === 511) {
        return '13d';
    } else if (code < 600) {
        return '09d';
    } else if (code < 700) {
        return '13d';
    } else if (code < 800) {
        return '50d';
    } else if (code == 800) {
        return '01d';
    } else if (code < 802) {
        return '02d';
    } else if (code < 803) {
        return '03d';
    } else if (code < 805) {
        return '04d';
    }
}