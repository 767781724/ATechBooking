import ShowToast from './toast';

const fetchService = (url, options = {}) => {
    return fetch(url, options)
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        ShowToast("请求数据失败，请检查网络！")
        console.error(error);
    });
};

const baseURL = 'http://c41.fbsmart.net:7803';
const baseURLPass = 'http://c41.fbsmart.net:7801';

export default class Request {

    static login(userid, userpass) {
        return fetchService(`${baseURL}/login?userid=${userid}&userpass=${userpass}`);
    }

    static changePassword(userid, oldpass, newpass) {
        return fetchService(`${baseURLPass}/chgrptuserpsw?userid=${userid}&oldpass=${oldpass}&newpass=${newpass}`);
    }

    static getStore(storeid, signcode) {
        return fetchService(`${baseURL}/getstore?storeid=${storeid}&signcode=${signcode}`);
    }

    static getScheduleList(storeid, userid, username, signcode) {
        return fetchService(`${baseURL}/getmyyud?storeid=${storeid}&userid=${userid}&username=${username}&signcode=${signcode}`);
    }

    static getMealTypeList(storeid, storecode, signcode) {
        return fetchService(`${baseURL}/getcanb?storeid=${storeid}&storecode=${storecode}&signcode=${signcode}`);
    }

    static getReservationDesk(storeid, storecode, arrivedate, mealtype, signcode) {
        return fetchService(`${baseURL}/getbezuot?storeid=${storeid}&storecode=${storecode}&arrivedate=${arrivedate}
            &arrivecanb=${mealtype}&signcode=${signcode}`);
    }

    static addupdateSchedule(uid, storeid, storecode, custid, custname, linktel, zuotid, zuotmc, arrivedate, arrivetime, 
        mealtypecode, mealtypename, arrivestore, peoplecount, operid, oper, salerid, signcode) {
            return fetchService(`${baseURL}/updyud?storeid=${storeid}&storecode=${storecode}&custid=${custid}&custname=${custname}
                &linktel=${linktel}&zuotid=${zuotid}&zuotmc=${zuotmc}&arrivedate=${arrivedate}&arrivetime=${arrivetime}
                &arrivecanbcode=${mealtypecode}&mealtypename=${mealtypename}&arrivestore=${arrivestore}&peoplecount=${peoplecount}
                &operid=${operid}&oper=${oper}&salerid=${salerid}&predished=0&locked=1&signcode=${signcode}`);
    }

    static getCustomers(storeid, searchcode, signcode) {
        return fetchService(`${baseURL}/getcust?storeid=${storeid}&cust=${searchcode}&signcode=${signcode}`);
    }
}
