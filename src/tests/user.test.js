const api = require('./services/api')
const chai = require("chai");
const User = require('../models/User')
const expect = require('chai').expect
describe('User Routes', () => {

  // it('Should create new user', async () =>{

  //   const user = {
  //     name: 'Bruno Teixeira',
  //     email: 'bruno@teixeira.com',
  //     password: 'brunotei'
  //   }

  //   const {data} = await api.post('/users', user)

  //   expect(data).to.be.an('object').to.have.property('email').to.equal('bruno@teixeira.com');

  // })

  it('Should finOnde user', async () => {
    const user = {
      email: 'nextgenn@gmail.com'
    }
    console.log(user)
    const { data } = await api.get('/users', user)
    console.log(data)

    expect(data).to.be.an('object').to.have.property('email').to.equal('thaisgennari@gmail.com');
  })

  it('should update user password', async () => {
   const user ={
     password: 'nextgenn34'
   }

   const {data} = await api.put('/user/5fb6b58352ee29793fcf8ba8', user)
   console.log(data)
    expect(data).to.be.an('object').to.have.property('ok').to.equal(1)
  })
})