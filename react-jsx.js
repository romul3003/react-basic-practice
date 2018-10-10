const e = React.createElement


function Car(props) {
    return e('div', {className: 'card'}, [
        e('div', {className: 'card-image', key: 'div'}, e('img', {src: props.car.img, alt: props.car.name})),
        e('h3', {key: 'h3'}, props.car.name),
        e('p', {key: 'ppp'}, props.car.price)
    ])
}

class App extends React.Component {

    state = {
        cars: [
            { name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg' },
            { name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' },
            { name: 'Rolls Royce', price: 50000, img: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg' },
            { name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }
        ]
    }

    renderCars() {
        return this.state.cars.map(car => {
            return e(Car, {car: car, key: car.name + Math.random()})
        })
    }

    render() {
        return e(
            'div',
            {className: 'app'},
            e('div',
                {className: 'list'},
                this.renderCars()
                )
            )
    }
}

ReactDOM.render(e(App), document.getElementById('root'))