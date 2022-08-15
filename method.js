const t = {
    id: 18,
    name: 'rahul barman',
    money: 10000,
    mejor: 'CSE',
    subject: ['bangla', 'math', 'english', 'physic'],

    bestFrind: {
        name: 'Zubayer',
        id: 17,
        mejor: 'CSE'
    },
    take: function (id) {
        console.log('student name :', this.name, id);
    },
    tret: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }


}
t.take(18);
const tret = t.tret(2000)
console.log(tret)