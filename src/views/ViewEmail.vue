<template>
  <div class="container">
    <b-row class="row">
      <b-col class="col-md-10">
        <b-card no-body class="overflow-hidden border-0">
          <div class="about">
              <h3>{{ email.subject }}</h3>
            <small>{{ new Date(email.created_at).toDateString() }} </small>

            <div v-html="email.html_content">

            </div>
          <div class="mt-5">
            Sent to : <span>{{ email.recipient.email }}</span>
          </div>
            From : <span>{{ email.sender.email }}</span>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>


</template>

<script>
import axios from "axios";

export default {
  name: "ViewEmail",
  data(){
    return {
      email : ''
    }
  },
  created() {
    var vm = this;
    axios.get("view-email/" + this.$route.params.id)
    .then((res)=>{
        console.log(res)
      vm.email = res.data;

    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
