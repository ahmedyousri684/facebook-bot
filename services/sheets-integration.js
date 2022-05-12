const baseUrl = "https://sheets-integrations-api.herokuapp.com/";

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
    static async turnNotificationOn(phone, psid) {
        baseUrl += `?phone=${phone}&psid=${psid}`
        const res = await makeRequest(`${baseUrl}`, {
            method: "POST",
            body: JSON.stringify(contact_us_data),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"

            },
        });
        return res;
    }
    static async getOrderStatus(phone) {
        baseUrl += `?phone=${phone}`
        let URL = baseUrl;
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
        baseUrl += `status-by-psid?psid=${psid}`
        let URL = baseUrl;
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
}