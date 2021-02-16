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
                <th scope="col">Email</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="email in emails" :key="email.id">
                <th scope="row">{{  email.id }}</th>
                <td><router-link :to="'recipient-emails/' + email.id">{{ email.email }}</router-link></td>
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
  name: "RecipientList",
  data(){
    return {
      emails: ''
    }
  },
  created() {
    var vm = this;
    axios.get('recipient-list').then((res)=>{
      vm.emails = res.data;
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
