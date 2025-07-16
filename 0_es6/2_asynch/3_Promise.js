const likecoffee = true;

const coffee = () => {
    return new Promise((resolve, reject) => {
        if (likecoffee) resolve('커피를 주문한다');
        else reject('주문하지 않는다');
    });
};

const order = (message) => {
    console.log(message);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('커피를 포장한다');
            resolve('포장 완료');
        }, 2000);
    });
};

coffee()
    .then(result => order(result))
    .then(final => console.log(final))
    .catch(err => console.error('에러 발생:', err));

console.log('다른 작업 가능');
