<template>
    <!-- shorthand v-slot: # -->
    <ValidationProvider tag="div" :name="name" :rules="rules" v-slot="{ errors, valid }">
        <b-form-group :label="label" :label-for="labelFor">
            <b-form-input
                :id="labelFor"
                :value="value"
                @input="$emit('input', $event.trim())"
                :type="type"
                :state="errors[0] ? false : valid ? true : null"
                :placeholder="placeholder"
            ></b-form-input>
            <b-form-invalid-feedback>
                {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
    </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ValidationProvider } from "vee-validate";

@Component({
    components: {
        ValidationProvider,
    },
})
export default class CustomInput extends Vue {
    @Prop() label!: string;
    @Prop() labelFor!: string;
    @Prop() value!: string;
    @Prop() type!: string;
    @Prop() placeholder!: string;
    @Prop() rules!: string;
    @Prop() name!: string;
}
</script>

<style></style>
y
