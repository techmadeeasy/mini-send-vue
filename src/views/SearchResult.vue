<template>
  <div class="container">
    <b-row class="row">
      <b-col class="col-md-10">
        <b-card no-body class="overflow-hidden border-0">
          <div class="about">
            <table class="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sender</th>
                <th scope="col">Recipient</th>
                <th scope="col">Subject</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="email in emails" :key="email.id">
                <th scope="row">{{  email.id }}</th>
                <td>{{  email.sender.email }}</td>
                <td><router-link :to="'recipient-emails/' + email.recipient_id">{{ email.recipient.email }}</router-link></td>
                <td><router-link :to="'/view-email/' + email.id">{{ email.subject }}</router-link></td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchResult",
  data(){
    return {
      emails: '',
      fields: ['from', 'to', 'subject', 'time'],
    }
  },
  created() {
    var vm = this;
    axios.get('get-emails')
        .then((res)=>{
          vm.emails = res.data;
        })
        .catch((err)=>{
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>
