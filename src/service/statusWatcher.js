const schedule = require("node-schedule");
const { Transaction } = require("../models");

function updateStatus() {
  Transaction.findAll({ attributes: ["id", "durationlimit"], raw: true })
    .then(result => {
      result.map(data => {
        let rule = new schedule.RecurrenceRule();
        rule.hour = data.durationlimit;
        schedule.scheduleJob(rule, function() {
          Transaction.update({ status: false }, { where: { id: data.id } })
            .then(updated => {
              console.log(`status for id ${id} has been updated!`);
            })
            .catch(err => {
              console.log(`error occurs = ${err}`);
            });
        });
      });
    })
    .catch(err => {
      console.log(`error find: ${err}`);
    });
}

module.exports = updateStatus;
