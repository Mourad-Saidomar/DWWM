import { User } from './user.js';

Vue.createApp({
    data() {
        return {
            user: new User(),
        };
    }
}).mount('#app');



