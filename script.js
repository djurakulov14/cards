let container = document.querySelector('.container1') 
let mywallets = document.querySelector('.forcard')
let tbody = document.querySelector('tbody')


let arr = [
    {
        "name": "Добро пожаловать, Alex Adams!",
        "email": "alexadams@google.com"
    },
    {
        "name": "Мои кошельки",
        "email": "alexadams@google.com"
    },
    {
        "name": "Мои транзакции",
        "email": "alexadams@google.com"
    },
]

let cards = [
    {
        "type": "Visa",
        "money": "Rub",
        "color": "linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%);"
    },
    {
        "type": "Humo",
        "money": "Sum",
        "color": "linear-gradient(84.37deg, #5F0A87 2.27%, #A4508B 92.26%);"
    },
    {
        "type": "Visa",
        "money": "USD",
        "color": "linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%);"
    },
    {
        "type": "Мир",
        "money": "Rub",
        "color": "linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%);"
    },
]

let transaktions = [
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },{
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    },
    {
        "id": 1,
        "wallet": "VISA",
        "category": "Автомобиль",
        "total": 414000000,
        "date": "4 дня назад"
    }
]

function reload() {
    let headLeft = document.createElement('div')
    let headRight = document.createElement('div')
    let main = document.createElement('a')
    let wallets = document.createElement('a')
    let transactions = document.createElement('a')
    let mail = document.createElement('p')
    let img = document.createElement('img')

    headLeft.classList.add('headLeft')
    headRight.classList.add('headRight')
    main.classList.add('main')
    wallets.classList.add('wallets')
    transactions.classList.add('transactions')
    mail.classList.add('mail')
    img.classList.add('img')

    main.href = './main.html'
    wallets.href = './wallets.html'
    transactions.href = './transaktions.html'

    main.innerHTML = 'Главная'
    wallets.innerHTML = 'Мои кошельки'
    transactions.innerHTML = 'Мои транзакции'
    mail.innerHTML = 'alexadams@google.com'
    img.src = './images/log_out.svg'

    headLeft.append(main, wallets, transactions)
    headRight.append(mail, img)
    container.append(headLeft, headRight)

    for(let item of cards) {
        if (!window.location.href.includes('transaktions.html')) {
            let card = document.createElement('div')
            let type = document.createElement('p')
            let money = document.createElement('p')
    
            card.classList.add('card')
            type.classList.add('type')
            money.classList.add('money')
    
            type.innerHTML = item.type
            money.innerHTML = item.money
            card.append(type, money)
    
            mywallets.prepend(card)
        }
    }

    for(let item of transaktions) {
        let trans = document.createElement('tr')

        let th_id = document.createElement('th')
        let th_sent = document.createElement('th')
        let th_categ = document.createElement('th')
        let th_total = document.createElement('th')
        let th_time = document.createElement('th')

        th_id.classList.add('th_id')
        th_sent.classList.add('th_sent')
        th_categ.classList.add('th_categ')
        th_total.classList.add('th_total')
        th_time.classList.add('th_time')

        th_id.innerHTML = item.id
        th_sent.innerHTML = item.wallet
        th_categ.innerHTML = item.category
        th_total.innerHTML = item.total
        th_time.innerHTML = item.date

        trans.append(th_id, th_sent, th_categ, th_total, th_time)
        tbody.append(trans)
    }
}

reload()