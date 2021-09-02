import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://1300-154-160-3-210.ngrok.io",
  headers: { Accept: 'application/json'}
});



const login = (email, password) => apiClient.post('/ticketsys/api/auth/login.php', {email, password} );

const acceptTask = (taskid, mobile,value) => apiClient.post('/ticketsys/api/auth/accept.php', {taskid, mobile,value} );

const closeTask = (taskid, mobile,value) => apiClient.post('/ticketsys/api/auth/complete.php', {taskid, mobile,value} );

const rateTask = (taskid, mobile,value) => apiClient.post('/ticketsys/api/auth/rate.php', {taskid, mobile,value} );

export default {
  login,
  acceptTask,
  closeTask,
  rateTask
};
