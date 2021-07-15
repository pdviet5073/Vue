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

<script>
import { ValidationProvider } from "vee-validate";
export default {
    name: "CustomInput",
    props: ["label", "labelFor", "value", "type", "placeholder", "rules", "name"],
    components: {
        ValidationProvider,
    },
};
</script>

<style></style>
y
