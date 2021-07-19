import Vue from "vue";

export function toUppercase(value: string): string {
    return value.toUpperCase();
}

const filters = {
    toUppercase,
};

(Object.keys(filters) as Array<keyof typeof filters>).forEach((key) => {
    Vue.filter(key, filters[key]);
});
