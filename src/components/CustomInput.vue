<template>
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
</template>

<script>
export default {
    name: "CustomInput",
    props: ["label", "labelFor", "value", "type", "placeholder", "errors", "valid"],
};
</script>

<style></style>
y
