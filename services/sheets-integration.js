const baseUrl = "https://sheets-integrations-api.herokuapp.com/";
const axios = require('axios');
module.exports = class SheetIntegration {
    static async makeRequest(apiUrl, requestOptions) {
        try {
            const response = await fetch(apiUrl, requestOptions);
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    static async turnNotificationOn(data) {
        let URL = `https://sheets-integrations-api.herokuapp.com/?phone=${data.phone}&psid=${data.psid}`
        return await axios({
            method: "post",
            url: URL,
            config: {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "content-Type": "application/json",
                },
            },
        }).catch(function (err) {
            console.log("catch heree")
            return err;
        })
    }
    static async getOrderStatus(phone) {
        let URL = `https://sheets-integrations-api.herokuapp.com/?phone=${phone}`;
        console.log(URL)
        return await axios({
            method: "get",
            url: URL,
            config: {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "content-Type": "application/json",
                },
            },
        }).catch(function (err) {
            return err;
        })
    }

    static async getOrderStatusbyPSID(psid) {
        let URL = `https://sheets-integrations-api.herokuapp.com/status-by-psid?psid=${psid}`;
        console.log(URL)
        return await axios({
            method: "get",
            url: URL,
            config: {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "content-Type": "application/json",
                },
            },
        }).catch(function (err) {
            console.log("catch heree")
            return err;
        })
    }
}