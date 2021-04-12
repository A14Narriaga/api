import "./style.scss"

const cards = document.getElementById('cards') as HTMLElement

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
        <img src="${img}" alt="${name}">
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

callAPI()


