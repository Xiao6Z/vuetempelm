import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Badge,
    Swipe, SwipeItem,
    RadioGroup, Radio,
    Button,
    Checkbox,
    Switch,
    Stepper,
    Card,
    Tag,
    List,
    Image as vimg,
    Cell,
    CellGroup,
    Icon,
    AddressList,
    AddressEdit,
    Toast,
    SubmitBar,
    Popup,
    DatetimePicker,
    Dialog,
    Empty,
    Grid, GridItem,
    Rate,Search,
    IndexBar, IndexAnchor,
    Form,Field,
    Tab,Tabs,
    Sidebar, SidebarItem,
    DropdownMenu, DropdownItem,
} from "vant";
// import {DropdownMenu as d1,DropdownItem as d2,Dropdown as d3} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'


import 'vant/lib/switch/style';
import 'vant/lib/checkbox/style';
import 'vant/lib/button/style'
import 'vant/lib/stepper/style'
import 'vant/lib/card/style'
import 'vant/lib/tag/style'
import 'vant/lib/list/style'
import 'vant/lib/image/style'
import 'vant/lib/cell/style'
import 'vant/lib/cell-group/style'
import 'vant/lib/icon/style'
import 'vant/lib/radio/style'
import 'vant/lib/radio-group/style'
import 'vant/lib/submit-bar/style'
import 'vant/lib/address-list/style'
import 'vant/lib/address-edit/style'
import 'vant/lib/dialog/style'
import 'vant/lib/swipe-item/style'
import 'vant/lib/swipe/style'
import 'vant/lib/grid/style'
import 'vant/lib/rate/style'
import 'vant/lib/search/style'
import 'vant/lib/index-bar/style'
import 'vant/lib/index-anchor/style'
import 'vant/lib/grid-item/style'
import 'vant/lib/datetime-picker/style'
import 'vant/lib/form/style'
import 'vant/lib/field/style'
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/sidebar/style'
import 'vant/lib/sidebar-item/style'
import 'vant/lib/tabs/style'
import 'vant/lib/dropdown-menu/style'
import 'vant/lib/dropdown-item/style'
import navbar from "@/components/navbar/navbar";

Vue.config.productionTip = false
//
// Vue.use(d1)
// Vue.use(d2)
// Vue.use(d3)



Vue.use(Badge)
Vue.use(Search)
Vue.use(IndexAnchor)
Vue.use(IndexBar)
Vue.use(Rate)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Empty)
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Dialog)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(Stepper)
Vue.use(Card)
Vue.use(Tag)
Vue.use(List)
Vue.use(vimg)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(AddressList)
Vue.use(navbar)
Vue.use(AddressEdit)
Vue.use(SubmitBar)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(DatetimePicker)
Vue.use(Form)
Vue.use(Field)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.component('vswitch', Switch)
Vue.component('stepper', Stepper)
Vue.component('card', Card)
Vue.component('listview', List)
Vue.component('vimg', vimg)
Vue.component('cell', Cell)
Vue.component('cellgroup', CellGroup)
Vue.component('icon', Icon)
Vue.component('addresslist', AddressList)
Vue.component('addressedit', AddressEdit)
Vue.component('navbar', navbar)
Vue.component('submitbar', SubmitBar)
Vue.component('popup', Popup)
Vue.component('vradio', Radio)
Vue.component('vradiogroup', RadioGroup)
Vue.component('timepicker', DatetimePicker)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
