function getArticleGenerator(articles) {
    let clicks = 0;
    let contentDivRef = document.getElementById('content')

    return function () {
        let article = document.createElement('article')
        article.textContent = articles[clicks++];

        if (!article.textContent) { return }

        contentDivRef.append(article)
    } 
}