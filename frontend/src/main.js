import { createApp } from 'vue';
import { createStore } from "vuex";

import App from './App.vue';
import router from './router';

const store = createStore({
    state:
    {
        loginVaild: false,
        userExists: false
    },
    mutations: {
        changestate(state, res) {
            if (res === 404 && (state.loginVaild = false)) {
                return state.loginVaild;
            }

            if (res === 200 && (state.loginVaild = true)) {
                return state.loginVaild = false;
            }

            return state.loginVaild = !state.loginVaild
        },
        userExists(state, res) {
            if (res === 201 && (state.userExists = false)) {
                return state.userExists
            }

            if (res === 200 && (state.userExists = true)) {
                return state.userExists = false
            }

            return state.userExists = !state.userExists
        }
    }
})


createApp(App).use(store).use(router).mount('#app')