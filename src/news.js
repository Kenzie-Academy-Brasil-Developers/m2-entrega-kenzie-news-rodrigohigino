class News{
    
    static async renderNews (lista){
        const containerPrincipal = document.querySelector(".container-principal")
        const containerNormal = document.querySelector(".container--normal")

        lista.forEach((noticia) =>{
            const article = document.createElement("article")

            const figure = document.createElement("figure")

            const img = document.createElement("img")
            img.src = noticia.imagem

            const divDescription = document.createElement("div")

            const tag = document.createElement("p")
            tag.innerText = noticia.categoria
            tag.id = "tag"

            const link = document.createElement("a")
            link.href = noticia.noticia_completa
            link.target = "_blank"

            const h2 = document.createElement("h2")
            h2.innerText = noticia.titulo

            const resumo = document.createElement("p")
            resumo.innerText = noticia.resumo

            const fonte = document.createElement("span")
            fonte.innerText = `Fonte: ${noticia.fonte}`

                if(noticia.id == 3){
                
                article.classList.add("article--principal")
                divDescription.classList.add("article--principal__description")
                resumo.classList.add("article--principal__description__resumo")

                figure.append(img)
                link.append(h2)
                divDescription.append(tag,link,resumo,fonte)
                article.append(figure,divDescription)
                containerPrincipal.append(article)
                
                } else{
                
                article.classList.add("article--normal")
                divDescription.classList.add("article--normal__description")
                resumo.classList.add("article--normal__description__resumo")
                
                figure.append(img)
                link.append(h2)
                divDescription.append(tag,link,resumo,fonte)
                article.append(figure,divDescription)
                containerNormal.append(article)

                }
        })

    }
}



export default News