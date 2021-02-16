<template>
  <div>
    <div class="row justify-content-center">
      <div class="form-group col-md-4">
        <input type="text" v-model="searchTerm" class="form-control">
      </div>
      <div class="form-group col-md-1">
        <button class="btn btn-secondary float-left" @click="search">Search</button>
      </div>
    </div>
    <div class="row justify-content-center" v-if="searchTerm.length > 0">
      <div class="col-md-5" @click="resetForm">
        <ul class="list-unstyled text-left" v-for="result in searchResult" :key="result.id">
            <div class="border-bottom"> <router-link :to="'/view-email/' + result.id">{{ result.subject }}</router-link></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SearchInput',
  props: {
    msg: String
  },
  created() {

  },
  data(){
    return {
      searchTerm: '',
      loading: false,
      searchResult: ''
    }
  },
  methods: {
    search: function () {
      if (this.searchTerm.length > 2){
        this.loading = true;
        var vm = this;
        axios.post('search/' + this.searchTerm).then((res)=>{
          vm.searchResult  = res.data;
          vm.loading = false;
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    resetForm: function () {
      this.searchTerm = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
