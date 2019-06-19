var fs = require('fs');

var getData = function (file) {
    let obj = JSON.parse(fs.readFileSync(file, 'utf8'));
    let output = JSON.stringify(obj, null, 4);
    return output;
}

var appRouter = function (app) {
    app.get('/', function (req, res) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    });

    app.get('/25walk-info', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/25walk-info.json'));
    });

    app.get('/25walk', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/25walk.json'));
    });

    app.get('/all-questionnaire-responses', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/all-questionnaire-responses.json'));
    });

    app.get('/cds-info', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/cds-info.json'));
    });

    app.get('/cds', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/cds.json'));
    });

    app.get('/dmt', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/dmt.json'));
    });

    app.get('/edss-score', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/edss-score.json'));
    });

    app.get('/encounters', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/encounters.json'));
    });

    app.get('/imaging-orders', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/imaging-orders.json'));
    });

    app.get('/lab-orders', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/lab-orders.json'));
    });

    app.get('/medications-orders', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/medications-orders.json'));
    });

    app.get('/ms-population-data', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/ms-population-data.json'));
    });

    app.get('/other-meds', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/other-meds.json'));
    });

    app.get('/progress-note', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/progress-note.json'));
    });

    app.get('/relapses', function (req, res) {
        res.header("Content-Type", 'application/json');
        res.send(getData('data/relapses.json'));
        // setTimeout(() => {
        //     res.send(getData('data/relapses.json'));
        // }, 5000);
    });

    app.put('/put-timeout-test', function (req, res) {
        res.header("Content-Type", 'application/json');
        setTimeout(() => {
            res.send({ ok: true });
        }, 120000);
    });

    app.post('/post-timeout-test', function (req, res) {
        res.header("Content-Type", 'application/json');
        setTimeout(() => {
            res.send({ ok: true });
        }, 120000);
    });

    app.put('/empty-check', function (req, res) {
        // res.header("Content-Type", 'application/json');
        console.log("success");
        setTimeout(() => {
            res.send();
        }, 1000);
    });

    app.post('/empty-check', function (req, res) {
        // res.header("Content-Type", 'application/json');
        console.log("success");
        setTimeout(() => {
            res.send();
        }, 1000);
    });

    app.delete('/empty-check', function (req, res) {
        // res.header("Content-Type", 'application/json');
        console.log("success");
        setTimeout(() => {
            res.send();
        }, 1000);
    });


    app.put('/relapses', function (req, res) {
        console.log("success");
        setTimeout(() => {
            res.send();
        }, 1000);
    });

    app.post('/relapses', function (req, res) {
        console.log("success");
        setTimeout(() => {
            res.send();
        }, 1000);
    });

    app.delete('/relapses', function (req, res) {
        console.log("success");
        setTimeout(() => {
            res.send();
        }, 1000);
    });
}

module.exports = appRouter;