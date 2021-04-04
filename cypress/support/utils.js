export default class Utils {
    static getRandomRange(min = 0, max = 20) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static getRandomDate(res=1000) {
        return Math.floor(Date.now() / res);

    }
    static getRandomString() {
        return Math.random().toString(36).substring(4);
    }

    static getAppOrigin(){
        return "https://localhost:9443";
    }
}