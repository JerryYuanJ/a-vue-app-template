module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    page: { selector: '#index' },
    content: { selector: '.content' },
    noticeCount: { selector: '.mint-badge' },
    deleteButton: { selector: '.mint-cell-right .mint-cell-swipe-button' }
  },
  sections: {
    messageBox: {
      selector: '.mint-msgbox',
      elements: {
        title: { selector: '.mint-msgbox-title' },
        content: { selector: '.mint-msgbox-message' },
        cancelBtn: { selector: '.mint-msgbox-cancel' },
        confirmButton: { selector: '.mint-msgbox-confirm' }
      }
    }
  }
}