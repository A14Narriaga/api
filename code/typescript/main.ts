const cards = document.getElementById('cards') as HTMLElement
const body = document.body as HTMLElement
const btn = document.getElementById('theme-toggler') as HTMLElement
const themeLocal = localStorage.getItem('theme')
if(themeLocal === 'dark') body.classList.add('dark')

const callAPI = async () => {
    const getData = await fetch('https://www.breakingbadapi.com/api/characters')
    const data = await getData.json()
    const result = data
    .map((character) => createCard(character))
    .join(' ')
    cards.innerHTML = result
}

const createCard = ({img,name,status,nickname,birthday,occupation,portrayed}): string => {
    return `
    <section class="card">
        <div class="img-content">
            <img src="${img}" alt="${name}">
        </div>
        <div class="content">
            <div class="title">
                <h1>${name}</h1>
                <span>${(status === 'Alive') ? "🤍" : "💀"}</span>
            </div>
            <div class="info">
                <p>Nickname: ${nickname}</p>
                <p>Birthday: ${birthday}</p>
                <p>Occupation: ${occupation}</p>
                <p>Portrayed: ${portrayed}</p>
            </div>
        </div>
    </section>
    `
}

btn.addEventListener('click', (): void => {
    body.classList.toggle('dark')
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light') 
})

callAPI()
