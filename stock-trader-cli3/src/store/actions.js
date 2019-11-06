import Vue from 'vue';
import axios from 'axios';

export const loadData = ({ commit }) => {
  axios.get('https://vuejs-stock-trader-5a1bd.firebaseio.com/data.json')
    .then(res => {
      const stocks = res.data.stocks;
      const funds = res.data.funds;
      const stockPortfolio = res.data.stockPortfolio;
      const portfolio = {
        stockPortfolio,
        funds
      };
      commit('SET_STOCKS', stocks);
      commit('SET_PORTFOLIO', portfolio)
    })
    .catch(error => console.log(error))
}
