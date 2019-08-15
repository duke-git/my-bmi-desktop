
let utils = {
    getDatetime(date) {
        let d = date ? date : new Date();
        let year = d.getFullYear();
        let month = change(d.getMonth() + 1);
        let day = change(d.getDate());
        let hour = change(d.getHours());
        let minute = change(d.getMinutes());
        let second = change(d.getSeconds());

        function change(t) {
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        }

        let time = year + '-' + month + '-' + day + ' '
            + hour + ':' + minute + ':' + second;

        return time;
    },
    /**
   *获取前n天或后n天日期字符串
   * @param {*} date
   * @param {*} flag "before" or "after"
   * @param {*} n
   * @returns
   */
    getDate(date, flag, n) {
        let d = date ? date : new Date();

        if (flag === "before") {
            d.setDate(d.getDate() - n);
        }
        if (flag === "after") {
            d.setDate(d.getDate() + n);
        }

        let year = d.getFullYear();
        let month = change(d.getMonth() + 1);
        let day = change(d.getDate());

        function change(t) {
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        }

        let time = year + '-' + month + '-' + day;

        return time;
    }
};
export default utils;
