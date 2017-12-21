import {Toast, Indicator, MessageBox} from 'mint-ui';
let DialogUtil = {
  showToast(msg, position = 'bottom', duration = 2000, className, iconClass){
    Toast({
      message: msg,
      position: position,
      duration: duration,
      className: className,
      iconClass: iconClass
    })
  },
  openLoading(msg = '加载中', type = 'fading-circle'){
    Indicator.open({
      text: msg,
      spinnerType: type
    });
  },
  closeLoading(){
    Indicator.close()
  },
  showAlert(title = '提示', content = '操作成功', callback){
    MessageBox.alert(content, title).then(callback);
  },
  showConfirm(title = '提示', content = '操作成功', yesCallback, noCallback){
    MessageBox.confirm(content, title).then(yesCallback, noCallback);
  },
  showPrompt(prompt = '提示', confirmCallback, cancelCallback){
    MessageBox.prompt(prompt).then(({value, action}) => {
      confirmCallback(value, action)
    }, () => cancelCallback);
  }
};
export default DialogUtil
