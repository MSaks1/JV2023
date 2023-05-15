let inputHtml = document.querySelector('#input');
let todoListHtml = document.querySelector('#todo-List')

inputHtml.addEventListener('keyup', function (event) {
    if (event.key === 'Enter'){
        
        console.log(vajutati enter: '+ inputHtml.value);
        todoListHtml.innerHTML +=
        <div class="todo">
            <input type="checkbox">
                <span class="text"> {inputHtml.value}</span>
                <span>x</span>
        </div>
        ;
        inputHtml.value = ''
    }
{}
