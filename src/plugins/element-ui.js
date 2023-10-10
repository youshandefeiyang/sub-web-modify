import Vue from "vue";
import {
  Loading,
  MessageBox,
  Message,
  Notification,
  Form,
  FormItem,
  Button,
  Dialog,
  Col,
  Row,
  Input,
  Divider,
  Checkbox,
  Collapse,
  CollapseItem,
  Option,
  OptionGroup,
  Card,
  Select,
  Container,
  Popover,
  Link,
  TabPane,
  Tabs,
} from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";
// import '@/assets/css/element-ui.scss'
// import '@/assets/css/element-element-variables.scss'
const list = [
  Form,
  FormItem,
  Button,
  Dialog,
  Col,
  Row,
  Input,
  Divider,
  Checkbox,
  Collapse,
  CollapseItem,
  Option,
  OptionGroup,
  Card,
  Select,
  Container,
  Popover,
  Link,
  TabPane,
  Tabs,
];

list.forEach((item) => {
  Vue.use(item, { locale, size: "small" });
});

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
