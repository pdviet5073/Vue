<template>
    <div class="login">
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group id="input-group-1" label="User name:" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="initialValue.userName"
                        name="userName"
                        type="text"
                        placeholder="User name"
                    ></b-form-input>
                </b-form-group>
                <span>{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        type="password"
                        name="password"
                        v-model="initialValue.password"
                        placeholder="Password"
                    ></b-form-input>
                </b-form-group>
                <span> {{ errors[0] }}</span>
            </ValidationProvider>

            <div>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </div>
            <p v-if="auth">{{ auth.userName }}</p>
        </b-form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";

export default {
    name: "login",
    data() {
        return {
            initialValue: {
                userName: "",
                password: "",
            },
        };
    },
    components: {
        ValidationProvider,
    },
    computed: mapState({
        auth: (state) => state.logIn.dataUser,
    }),
    methods: {
        ...mapActions(["logIn"]),

        onSubmit() {
            const { userName, password } = this.initialValue;
            this.logIn({
                userName: userName.trim(),
                password: password.trim(),
            });
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.userName = "";
            this.form.name = "";
        },
    },
    watch: {
        auth() {
            this.$router.push("todo");
        },
    },
};
</script>

<style lang="scss">
.login {
    max-width: 50%;
    margin: auto;
    input {
        margin: 10px 0;
    }
    button + button {
        margin-left: 10px;
    }
}
</style>
