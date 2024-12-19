function solve() {
    const formRef = document.querySelector('form');
    let openDivRef = document.querySelector('section:nth-child(2) div:nth-child(2)');
    let inProgressDivRef = document.querySelector('section:nth-child(3) div:nth-child(2)');
    let completeDivRef = document.querySelector('section:nth-child(4) div:nth-child(2)');

    formRef.addEventListener('submit', onSubmit)
    
    let create = {
        button: function (text, classToAdd) {
            console.log('createButton');
            let button = document.createElement('button');
            button.textContent = text;
            button.classList.add(classToAdd);
            return button
        },
        task: function (task, description, date) {
            let article = document.createElement('article');

            article.innerHTML = `        
                <h3>${task}</h3>
                <p>${description}</p>
                <p>${date}</p>
                <div class="flex"></div>
            `;
                
            let startButton = create.button('Start', 'green');
            startButton.addEventListener('click', onStart);
            article.querySelector('.flex').append(startButton)
    
            let deleteButton = create.button('Delete', 'red');
            deleteButton.addEventListener('click', onDelete);
            article.querySelector('.flex').append(deleteButton)
    
            return article
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        let task = formRef.querySelector('#task').value;
        let description = formRef.querySelector('#description').value;
        let date = formRef.querySelector('#date').value;

        if (!task || !description || !date) {
            return;
        }
            
        let article = create.task(task, description, date);
        openDivRef.append(article)
    }

    function onStart(event) {
        let article = this.parentElement.parentElement;
        article.remove();
        inProgressDivRef.append(article)

        article.removeEventListener('click', onStart);
        article.querySelector('button').remove()
        
        let finishButton = create.button('Finish', 'yellow')
        finishButton.addEventListener('click', onFinish);
        article.querySelector('.flex').append(finishButton)
    }

    function onDelete(event) {
        let article = this.parentElement.parentElement
        article.remove()
    }

    function onFinish(event) {
        let article = this.parentElement.parentElement;
        article.remove();
        completeDivRef.append(article)

        article.querySelectorAll('button').forEach(x => x.remove())
    }
}