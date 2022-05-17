

function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction () {
    return function namedFunction(){return 1}
}

function returnsAnAnonymousFunction () {
    return function () {return 2}
}
