<template>
    <div class="login">
        <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }" slim>
            <b-form @submit.prevent="handleSubmit(onSubmit)" @reset="onReset">
                <ValidationProvider tag="div" name="userName" rules="required" v-slot="{ errors, valid }">
                    <CustomInput
                        label="User name:"
                        labelFor="userName"
                        :value="initialValue.userName"
                        @input="initialValue.userName = $event"
                        type="text"
                        :errors="errors"
                        :valid="valid"
                        placeholder="User name"
                    />
                </ValidationProvider>
                <ValidationProvider
                    tag="div"
                    name="Phone"
                    rules="required|phoneNumber"
                    v-slot="{ errors, valid }"
                >
                    <CustomInput
                        label="Phone Number:"
                        labelFor="phone"
                        :value="initialValue.phone"
                        @input="initialValue.phone = $event"
                        type="text"
                        :errors="errors"
                        :valid="valid"
                    />
                </ValidationProvider>

                <ValidationProvider
                    tag="div"
                    name="password"
                    rules="required|min:6"
                    v-slot="{ errors, valid }"
                >
                    <CustomInput
                        label="Password:"
                        labelFor="password"
                        :value="initialValue.password"
                        @input="initialValue.password = $event"
                        type="password"
                        :errors="errors"
                        :valid="valid"
                    />
                </ValidationProvider>
                <div>
                    <b-button type="submit" variant="primary" :disabled="invalid">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </div>
                <p v-if="auth">{{ auth.userName }}</p>
            </b-form>
        </ValidationObserver>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CustomInput from "./CustomInput.vue";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";

extend("phoneNumber", {
    validate: (value) => {
        const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return regex.test(value);
    },
    message: "This {_field_} is invalid",
});

export default {
    name: "login",
    data() {
        return {
            initialValue: {
                userName: null,
                password: null,
                phone: null,
            },
        };
    },
    components: {
        ValidationProvider,
        ValidationObserver,
        CustomInput,
    },
    computed: mapState({
        auth: (state) => state.logIn.dataUser,
    }),
    methods: {
        ...mapActions(["logIn", "register"]),

        onSubmit(e) {
            console.log(this.initialValue, e);

            const { userName, password, phone } = this.initialValue;
            this.logIn({
                userName: userName,
                password: password,
                phone: phone,
            });
            this.onReset();
        },
        onReset() {
            // Reset our form values
            this.$nextTick(() => {
                this.$refs.form.reset();
            });
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
