<template>
    <div>
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="login">
            <div class="container my-5">
                <div class="row mb-3">
                    <div class="col">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" name="email" id="email" v-model="form.email" class="form-control">
                            <div class="text-danger" v-if="errors.email">{{errors.email}}</div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" v-model="form.password" class="form-control">
                            <div class="text-danger" v-if="errors.password">{{errors.password}}</div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Login",
        data(){
            return {
                form: {
                    email: "",
                    password: ""
                },
                errors: {
                    email: "",
                    password: ""
                }
            }
        },
        methods:{
            login(){
                axios.post('login', this.form)
                    .then(function(response){
                        if(response.status===200){
                            window.location = '/';
                        }
                    })
                    .catch(function(error){
                        if(error){
                            if(error.response.data.errors){
                                this.errors.email = error.response.data.errors.email ?? '';
                                this.errors.password = error.response.data.errors.password ?? '';
                            }
                        }
                    });
            }
        }
    }
</script>