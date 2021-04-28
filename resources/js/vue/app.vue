<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">ToDo List</h2>
            <add-item-form
                v-on:reloadlist="getList()"
            />
        </div>
        <div class="container-body">
            <list-view
                :items="items"
                v-on:reloadlist="getList()"
            />

        </div>


    </div>
</template>

<script>
import addItemForm from "./addItemForm";
import listView from "./listView";
export default {
    components:{
        addItemForm,
        listView
    },
    data: function (){
        return {
            items: []
        }
    },
    methods: {
        getList(){
            axios.get('api/items')
            .then(response => {
                this.items = response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getList();
    }

}
</script>
