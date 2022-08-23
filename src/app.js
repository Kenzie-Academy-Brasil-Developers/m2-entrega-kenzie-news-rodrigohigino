class NewsRequisition {
    static async getData (){
        const baseURL = "https://kenzie-news-api.herokuapp.com/api/news"
        const data = await fetch(baseURL, {
            method: "GET",
            headers: {
                    "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        console.log(data)
        return data
    }
}



export default NewsRequisition