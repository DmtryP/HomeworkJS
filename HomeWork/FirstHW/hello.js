function hello()
{
    alert('Hello world!');
}
hello();

function greetGuest(name='')
{
    name=prompt('Введите ваше имя')

    if(name==''){
        alert('Привет,гость!');
    }
    else{
        alert('Hello, '+name+'!');
    }
}
greetGuest();