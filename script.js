use:'strict';

const modal  = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

console.log(btnsOpenModal.length);

for(let i=0; i<btnsOpenModal.length; i++)
{
    const btnOpenModal = btnsOpenModal[i];
    const string = btnOpenModal.textContent;
    btnOpenModal.addEventListener('click', function(){
        console.log(string+" Clicked");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })   

    btnCloseModal.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })

    overlay.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })

    document.addEventListener('keydown', function(event)
    {
        console.log(event);
        if(event.key == 'Escape')
        {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    })
}