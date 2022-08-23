import NewsRequisition from "./app.js";
import News from "./news.js"

const listNews = await NewsRequisition.getData()


News.renderNews(listNews)