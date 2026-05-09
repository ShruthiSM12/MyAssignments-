import { test, expect, chromium, firefox } from '@playwright/test'

test('Red bus in edge', async () => {
    const edgeBrowser = await chromium.launch({ channel: 'msedge', headless: false })
    const edgePage = await edgeBrowser.newPage()
    await edgePage.goto('https://www.redbus.in')
    console.log(await edgePage.title())
    console.log(await edgePage.url())
})

test('Flipkart in firefox', async () => {
    const firefoxBrowser = await firefox.launch({ headless: false })
    const firefoxPage = await firefoxBrowser.newPage()
    await firefoxPage.goto('https://www.flipkart.com')
    console.log(await firefoxPage.title())
    console.log(await firefoxPage.url())
})