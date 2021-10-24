const cluster = require('cluster');
const v8 = require('v8');

/*let heavyHeapConsumer = () => {
    let arrays = [];
    setInterval(() => {
        arrays.push(new Array(1000000));
    }, 100);
};

if (cluster.isMaster) {
    cluster.fork();
    cluster.on('exit', (deadWorker, code, signal) => {
        // Перезапуск worker`а
        let worker = cluster.fork();

        // Сохранение id процесса
        let newPID = worker.process.pid;
        let oldPID = deadWorker.process.pid;

        // Логгирование
       /!* console.log('worker ' + oldPID + ' died.');
        console.log('worker ' + newPID + ' born.');*!/
    });
} else { // worker
    const initialStats = v8.getHeapStatistics();

    const totalHeapSizeThreshold =
        initialStats.heap_size_limit * 85 / 100;
    /!*console.log("totalHeapSizeThreshold: " + totalHeapSizeThreshold);*!/

    let detectHeapOverflow = () => {
        let stats = v8.getHeapStatistics();

        /!*console.log("total_heap_size: " + (stats.total_heap_size));*!/

        if ((stats.total_heap_size) > totalHeapSizeThreshold) {
            process.exit();
        }
    };
    setInterval(detectHeapOverflow, 1000);

    // выполнение основной логики
    heavyHeapConsumer();
}*/



function range(from, to, step) {
    if (from !==0 && !from) return []
    if (to !== 0 && !to && from <= 0) return []

    if (to !== 0 && !to) {
        to = from
        from = 0
    }
    const returnArray = []
    if (from > to) {
        if(!step ) step =-1
        if(step >0) return []
        for (let i = from; i > to; i += step) {
            returnArray.push(i)
        }
    } else if (from < to) {
        if(!step ) step =1
        if(step < 0) return []
        for (let i = from; i < to; i += step) {
            returnArray.push(i)
        }
    }
    return returnArray

}


module.exports = function (from, to, step) {
    if (cluster.isMaster) {
        cluster.fork();
        cluster.on('exit', (deadWorker, code, signal) => {
            // Перезапуск worker`а
            let worker = cluster.fork();

            // Сохранение id процесса
            let newPID = worker.process.pid;
            let oldPID = deadWorker.process.pid;

            // Логгирование
            /* console.log('worker ' + oldPID + ' died.');
             console.log('worker ' + newPID + ' born.');*/
        });
    } else { // worker
        const initialStats = v8.getHeapStatistics();

        const totalHeapSizeThreshold =
            initialStats.heap_size_limit * 85 / 100;
        /*console.log("totalHeapSizeThreshold: " + totalHeapSizeThreshold);*/

        let detectHeapOverflow = () => {
            let stats = v8.getHeapStatistics();

            /*console.log("total_heap_size: " + (stats.total_heap_size));*/

            if ((stats.total_heap_size) > totalHeapSizeThreshold) {
                process.exit();
            }
        };
        setInterval(detectHeapOverflow, 100);
       // выполнение основной логики
       const array=range(from, to, step);

       return  array
    }

}


