'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const name = await this.ctx.service.nickname.getRandName(30);
    this.ctx.set('Access-Control-Allow-Origin', 'https://go.alibaba-inc.com');
    this.ctx.body = {
      content: name.name,
      success: true,
    };
  }
}

module.exports = HomeController;
