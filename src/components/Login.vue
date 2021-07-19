<template>
    <div class="login">
        <ValidationObserver ref="form" v-slot="{ handleSubmit }" slim>
            <b-form @submit.prevent="handleSubmit(onSubmit)" @reset="onReset">
                <CustomInput
                    name="user name"
                    rules="required"
                    label="User name:"
                    labelFor="userName"
                    v-model="initialValue.userName"
                    type="text"
                    placeholder="User name"
                />
                <CustomInput
                    name="Phone"
                    rules="required|phoneNumber"
                    label="Phone Number:"
                    labelFor="phone"
                    v-model="initialValue.phone"
                    type="text"
                />

                <CustomInput
                    name="password"
                    rules="required|min:6"
                    label="Password:"
                    labelFor="password"
                    v-model="initialValue.password"
                    type="password"
                />
                <div>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </div>
                <p v-if="auth">{{ auth.userName }}</p>
            </b-form>
        </ValidationObserver>
    </div>
</template>

<script lang="ts">
import CustomInput from "./CustomInput.vue";
import i18n from "../plugins/i18n";
import { Component, Watch } from "vue-property-decorator";
import { extend, ValidationObserver } from "vee-validate";
import Vue from "vue";
import { Action, State } from "vuex-class";
import { user } from "@/types";
// import { toast } from "../mixins/toast";

interface initialValue {
    userName: string | null;
    password: string | null;
    phone: string | null;
}

extend("phoneNumber", {
    validate: (value): boolean => {
        const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return regex.test(value);
    },
    message: i18n.t("messages.Phone") as string,
});

@Component({
    components: {
        ValidationObserver,
        CustomInput,
    },
})
export default class Login extends Vue {
    initialValue: initialValue = {
        userName: null,
        password: null,
        phone: null,
    };

    @State((state) => state.logIn.dataUser) auth!: user;

    @Action("logIn/logIn") logIn!: Function;
    @Action("logIn/register") register!: Function;

    $refs!: {
        form: HTMLFormElement;
    };

    onSubmit(e: Event): void {
        console.log(this.initialValue, e);

        const { userName, password, phone } = this.initialValue;
        this.logIn({
            userName: userName,
            password: password,
            phone: phone,
        });
        this.$refs.form.reset();
    }
    onReset(): void {
        // Reset our form values
        this.$nextTick(() => {
            this.$refs.form.reset();
        });
    }
    @Watch("auth")
    handleChaneAuth() {
        this.$router.push("/");
    }
}
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
