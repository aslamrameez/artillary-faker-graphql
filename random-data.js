const Faker = require('faker')
module.exports = {
    generateRandomPayload
};
function generateRandomPayload(userContext, events, done) {

    const currentDate = new Date();
    const prior = new Date().setDate(currentDate.getDate() - 40);
    const dateOffset = Faker.random.number(currentDate - prior );
    const newDate = new Date(prior + dateOffset);
    userContext.vars.fromDate = formatDate(newDate);
    userContext.vars.toDate = formatDate(currentDate);
    console.log('userContext.vars.fromDate ' + userContext.vars.fromDate);
    console.log('userContext.vars.toDate ' + userContext.vars.toDate);
    return done();
}

function formatDate(d) {

    let  month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const  year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
