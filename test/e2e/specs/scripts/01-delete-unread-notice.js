let main = null
let PAUSE_DURATION = null
let WAIT_DURATION = 500
module.exports = {
  before (browser) {
    main = browser.page.main()
    PAUSE_DURATION = browser.globals.pauseDuration
  },
  beforeEach (browser) {
    browser.pause(PAUSE_DURATION)
  },
  'go to first tab': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .pause(PAUSE_DURATION)

    main
      .waitForElementVisible('@page')
      .getText('@noticeCount', result => {
        main.assert.equal(result.value, 10)
      })
  },
  'slide to show the delete button': function (browser) {
    let msgBox = main.section.messageBox
    main
      .getLocationInView('@deleteButton')
      .assert.visible('@deleteButton')
      .click('@deleteButton', () => { console.info('I clicked')})
    // main
    //   .expect.section('@messageBox').to.be.visible.after(WAIT_DURATION)
    // msgBox
    //   .getText('@title', (result) => {
    //     browser.assert.equal(result.value, '提示')
    //   })
    //   .getText('@content', (result) => {
    //     browser.assert.contain(result.value, '删除')
    //   })
    // browser
    //   .touchDown(0, () => {console.info('mouse down')})
    //   .pause(PAUSE_DURATION / 2)
      
    //   //.moveTo('@deleteButton')
    //   .mouseButtonUp(0, () => { console.info('mouse up') })
    
    // main.waitForElementVisible('@deleteButton')
    
  },
  after (browser) {
    // browser.end()
  }
}
