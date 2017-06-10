import ShowToast from './toast';

const fetchService = (url, options = {}) => {
    return fetch(url, options)
    .then(response => response.json())
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

    static login(userid: string, userpass: string) {
        return fetchService(`${baseURL}/login?userid=${userid}&userpass=${userpass}`);
    }

    static changePassword(userid: string, oldpass: string, newpass: string) {
        return fetchService(`${baseURLPass}/chgrptuserpsw?userid=${userid}&oldpass=${oldpass}&newpass=${newpass}`);
    }

    static getStore(storeid: string, signcode: string) {
        return fetchService(`${baseURL}/getstore?storeid=${storeid}&signcode=${signcode}`);
    }

    static getScheduleList(storeid: string, userid: string, username: string, signcode: string) {
        return fetchService(`${baseURL}/getmyyud?storeid=${storeid}&userid=${userid}&username=${username}&signcode=${signcode}`);
    }

    static getMealTypeList(storeid: string, storecode: string, signcode: string) {
        return fetchService(`${baseURL}/getcanb?storeid=${storeid}&storecode=${storecode}&signcode=${signcode}`);
    }

    static getReservationDesk(storeid: string, storecode: string, arrivedate: string, mealtype: string, signcode: string) {
        return fetchService(`${baseURL}/getbezuot?storeid=${storeid}&storecode=${storecode}&arrivedate=${arrivedate}
            &arrivecanb=${mealtype}&signcode=${signcode}`);
    }

    static addupdateSchedule(uid: string, storeid: string, storecode: string, custid: string, custname: string, linktel: string,
        zuotid: string, zuotmc: string, arrivedate: string, arrivetime: string, mealtypecode: string, mealtypename: string,
        arrivestore: string, peoplecount: number, operid: string, oper:string, signcode: string) {
            return fetchService(`${baseURL}/updyud?storeid=${storeid}&storecode=${storecode}&custid=${custid}&custname=${custname}
                &linktel=${linktel}&zuotid=${zuotid}&zuotmc=${zuotmc}&arrivedate=${arrivedate}&arrivetime=${arrivetime}
                &arrivecanbcode=${mealtypecode}&mealtypename=${mealtypename}&arrivestore=${arrivestore}&peoplecount=${peoplecount}
                &operid=${operid}&oper=${oper}&salerid=1&predished=0&locked=1&signcode=${signcode}`);
    }

    static getCustomers(storeid: string, searchcode: string, signcode: string) {
        return fetchService(`${baseURL}/getcust?storeid=${storeid}&cust=${searchcode}&signcode=${signcode}`);
    }
}
