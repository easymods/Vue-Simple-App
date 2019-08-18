const app = new Vue({
    el: '.app',
    data: {
        state: 'default',
        title: 'Shopping List App',
        newItem: '',
        items: [
            {
                label: '10 party hats',
                purchased: false,
            },
            {
                label: '2 board games',
                purchased: true,
            },
            {
                label: '20 cups',
                purchased: false,
            }
        ],
    },
    computed: {
        reverseArray() {
            return this.items.slice(0).reverse();
        }
    },
    methods: {
        saveItem: function() {
            this.items.push({
                label: this.newItem,
                purchased: false,
            });
            this.newItem = '';
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = '';
        },
        toggleClass: function(item){
            item.purchased = !item.purchased;
        }
    }
})