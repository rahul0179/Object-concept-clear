const bottle = {
    color: 'yellow',
    price: 50,
    hold: 'water',
    isCleand: true
}

for (const i in bottle) {
    console.log(i, bottle[i])
}