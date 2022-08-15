const t = {
    id: 18,
    name: 'rahul barman',
    mejor: 'CSE',
    subject: ['bangla', 'math', 'english', 'physic'],

    bestFrind: {
        name: 'Zubayer',
        id: 17,
        mejor: 'CSE'
    },
    take: function (id) {
        console.log('student name :', this.name, id);
    }
}
t.take(18)