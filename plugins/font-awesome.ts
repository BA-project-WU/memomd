import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faSpinner, faHome, faCog } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add( faUser, faSpinner, faHome, faCog
);

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, )
})