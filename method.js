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
    tret: function (expense, b) {
        const p = this.money - expense - b;
        return p;
    }


}
t.take(18);
const remaning1 = t.tret(2000, 100)
const remaning2 = t.tret(2000, 100)
const remaning3 = t.tret(2000)

console.log(remaning1);