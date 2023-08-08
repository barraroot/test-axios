import axios from 'axios'

console.log()

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://backoffice.everestgames.com.br/api/' : '/api/'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['EVEREST-DASH'] = 'demo.everestgames.com.br';
axios.defaults.headers.common['crossDomain'] = true



// Adiciona um interceptador na requisição
axios.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    console.log(error)
    return Promise.reject(error);
  });