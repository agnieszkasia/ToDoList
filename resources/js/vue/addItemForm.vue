<template>
    <div class="addItem">
        <input class="input" type="text" v-model="item.name" v-on:keyup.enter="addItem()">
        <font-awesome-icon
            icon="plus"
            @click="addItem()"
            :class="[item.name ? 'active' : 'inactive' , 'plus']"
        />
    </div>

</template>

<script>
export default {
    data: function (){
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem(){
            if( this.item.name == ''){
                return;
            }

            axios.post('api/item/store', {
                item: this.item
            })
            .then(response => {
                if (response.status == 201){
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
