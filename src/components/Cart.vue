<template>
    <div class="cart">
        <b-table striped hover :items="cartData" :fields="fields" responsive="md" fixed>
            <template #cell(stt)="data">{{ data.index + 1 }}</template>
            <template #cell(id)="data">{{ data.item.id }}</template>
            <template #cell(count)="data">
                <b-form-input
                    type="number"
                    class="cart__input"
                    min="1"
                    max="10"
                    :value="data.item.count"
                    @change="(e) => handleChangeCount(e, data.item)"
                ></b-form-input>
            </template>
            <template #cell(price)="data">
                {{ data.item.price.toLocaleString("vi") }}
            </template>
            <template #cell(total)="data">
                {{ (data.item.count * data.item.price).toLocaleString("vi") }}
            </template>
        </b-table>
        <div class="d-flex justify-content-start align-items-center">
            <h2 class="m-3">Total:</h2>
            <span>{{ totalPrice().toLocaleString("vi") }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { todoType } from "../types";

@Component
export default class Cart extends Vue {
    name: string = "Cart";

    fields: Array<string | { key: string; label: string }> = [
        "Stt",
        { key: "id", label: "Key" },
        "title",
        { key: "count", label: "So luong" },
        "price",
        { key: "total", label: "Tong tien" },
    ];

    cartData: todoType[] = JSON.parse(localStorage.getItem("cart")!);

    handleChangeCount(value: string, data: todoType) {
        const tempCart = JSON.parse(JSON.stringify(this.cartData));
        const indexCart = tempCart.findIndex((item: todoType) => item.id === data.id);
        tempCart.splice(indexCart, 1, { ...data, count: value });
        this.cartData = JSON.parse(JSON.stringify(tempCart));
        localStorage.setItem("cart", JSON.stringify(tempCart));
    }

    totalPrice() {
        return this.cartData?.reduce((total: number, current: todoType) => {
            return total + current.price! * current.count!;
        }, 0);
    }
}
</script>

<style scoped lang="scss">
.cart {
    &__input {
        margin: 0;
        max-width: 100px;
    }
}
</style>
