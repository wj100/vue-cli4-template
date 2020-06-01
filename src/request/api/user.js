import { instance } from '../instance'

export default {
   getUserList: async function () {
    console.log(instance)
    return await  instance.get('/user').then(res =>{return res})
  }
}
