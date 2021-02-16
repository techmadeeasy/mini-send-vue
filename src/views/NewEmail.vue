<template>
  <div class="container">
    <b-row class="row">
      <b-col class="col-md-10">
        <b-alert variant="success" show v-if="success">Email sent</b-alert>
        <b-alert variant="danger" show v-if="fail">There was a problem sending your mail, try again later</b-alert>
        <b-card no-body class="overflow-hidden border-0">
          <div class="about">
            <b-form @submit.prevent="sendEmail">
              <b-form-group
                  id="input-group-1"
                  label="From (Sender)"
                  label-for="input-1"
                  class="text-left pl-2"
              >
                <b-form-input
                    id="input-1"
                    v-model="form.from"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="To(Recipient)" label-for="input-2" class="text-left pl-2">
                <b-form-input
                    id="input-2"
                    v-model="form.to"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="Subject" label-for="input-3" class="text-left pl-2">
                <b-form-input
                    id="input-3"
                    v-model="form.subject"
                    placeholder="Enter name"
                    required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-4" label="Text" label-for="input-3" class="text-left pl-2">
                <b-form-textarea
                    id="input-4"
                    v-model="form.text"
                    placeholder="Text...."
                    required
                ></b-form-textarea>
              </b-form-group>
              <div class="text-left pl-2">
                <mc-wysiwyg v-model="form.htmlContent"></mc-wysiwyg>
              </div>
              <b-form-group  class="text-left pl-2">
                <b-form-file ref="file" @change="loadImg($event)" class="mt-3" plain></b-form-file>
              </b-form-group>
              <div class="text-left mt-3 pl-2">
                <b-button type="submit" variant="primary">Submit</b-button>
              </div>
            </b-form>
            <div>

            </div>
          </div>
        </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import { McWysiwyg } from '@mycure/vue-wysiwyg';
import axios from "axios";

  export default {
    data(){
      return {
        form : {
          from : '',
          to: '',
          subject: '',
          text: '',
          htmlContent: '',
        },
        success: false,
        fail: false
      }
    },
    created() {
      this.$refs.file.$on("load", (e)=>{
        const dataUrl = this.convertImg(e.currentTarget);
        console.log(dataUrl);
      })

    },
    components: {
      McWysiwyg
    },
    methods: {
      sendEmail: function () {
        var vm =this;
        let formData = this.formatFormData()
        axios.post('new-email', formData, {headers: {"Content-Type": "multipart/form-data"}})
        .then((res)=>{
          if (res.data=='true'){
            vm.success = true;
            vm.resetForm();
          }
        })
        .catch((err)=>{
          vm.fail = true;
          console.log(err)
        })
      },

      formatFormData: function () {
        let formData = new FormData();
        if (this.$refs.file.files[0]){
          formData.append('file', this.$refs.file.files[0]);
        }
        formData.append('from', this.form.from)
        formData.append('to', this.form.to)
        formData.append('subject', this.form.subject)
        formData.append('text', this.form.text)
        formData.append('htmlContent', this.form.htmlContent)
        return formData;
      },

      resetForm: function () {
          this.form.htmlContent = '';
          this.form.text = '';
          this.form.from = '';
          this.form.to = '';
          this.form.subject = '';
      }

    }
  }
</script>
