<template>
    <div>
        <h2 class="text-center">Register</h2>
        <form @submit.prevent="register">
            <div class="container my-5">
                <div class="row mb-3">
                    <div class="col">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" v-model="form.name" class="form-control">
                            <div class="text-danger" v-if="errors.name">{{errors.name}}</div>
                        </div>
                    </div>
                </div>
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
                        <button class="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Register",
        data(){
            return {
                form: {
                    name: "",
                    email: "",
                    password: ""
                },
                errors: {
                    name: "",
                    email: "",
                    password: ""
                }
            }
        },
        methods:{
            register(){
                axios.post('register', this.form)
                    .then(function(response){
                        if(response.status===200){
                            window.location = '/';
                        }
                    })
                    .catch(function(error){
                        if(error){
                            if(error.response.data.errors){
                                this.errors.name = error.response.data.errors.name ?? '';
                                this.errors.email = error.response.data.errors.email ?? '';
                                this.errors.password = error.response.data.errors.password ?? '';
                            }
                        }
                    });
            }
        }
    }
</script>