'use strict';

const Service = require('egg').Service;

class NicknameService extends Service {
  async getRandName(limit = 10) {
    const sql = 'SELECT * FROM `nn_nickname` AS t1 JOIN (SELECT ROUND(RAND() * ((SELECT MAX(id) FROM `nn_nickname`)-(SELECT MIN(id) FROM `nn_nickname`))+(SELECT MIN(id) FROM `nn_nickname`)) AS id) AS t2 WHERE t1.id >= t2.id ORDER BY t1.id LIMIT 1';
    // const name = await this.app.mysql.sql(sql);
    const name = [];
    for (let i = 0; i < limit; i++) {
      name.push(await this.app.mysql.query(sql));
    }
    return { name };
  }
}

module.exports = NicknameService;
