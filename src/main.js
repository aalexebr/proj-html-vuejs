/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faChevronLeft, faChevronRight, faEnvelope, faLocationDot, faPhoneVolume,faCar, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLocationDot, faPhoneVolume, faEnvelope,faFacebookF,faInstagram,faTwitter,faBars,faChevronRight,faChevronLeft,faCar,faWrench)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('font-awesome-layers', FontAwesomeLayers)
.component('font-awesome-layer-text', FontAwesomeLayersText)
.mount('#app')

