const kibriya = {
    id: 18,
    name: 'Rj kebria',
    money: 10000,

    tret: function (expense, boksis, vat) {
        this.money = this.money - expense - boksis - vat;
        console.log(this)

        return this.money;
    }


}
const heroBalam = {
    id: 102,
    money: 5000,
    name: 'hero balam'
}

//kibriya.tret(100)
const heroTret = kibriya.tret.bind(heroBalam)
//heroTret(500)

// call 
//kibriya.tret.call(heroBalam, 1000, 500, 50)


kibriya.tret.apply(heroBalam, [3000, 400, 100])