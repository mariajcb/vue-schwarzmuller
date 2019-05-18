<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Exercise 9 Form </h1>
                    <hr>
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="text"
                                id="password"
                                class="form-control"
                                v-model.lazy="password">
                        <p> {{ password }} </p>
                    </div>
                    <div class="form-check">
                        <p>Store in Database?</p>
                        <input class="form-check-input" type="radio" value="Yes" v-model="storeData">
                        <label class="form-check-label" for="Yes">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="No" v-model="storeData">
                        <label class="form-check-label" for="No">
                            No
                        </label>
                    </div>
                    <hr>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click.prevent="submitted = true">Submit!
                        </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name:  {{ fullName}}</p>
                        <p>Mail: {{ email}} </p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data () {
            return {
                fullName: 'Insert Name',
                email: '',
                password: '',
                storeData: 'Yes',
                submitted: false
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
