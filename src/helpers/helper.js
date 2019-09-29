module.exports = {
  response: (res, result, status, error) => {
    let print = {};

    print.status = status || 200;
    print.response = result;
    print.error = error;

    return res.status(print.status).json(print);
  },
  getOffset: (page, limit) => {
    return (Number(page) - 1) * limit;
  }
};
