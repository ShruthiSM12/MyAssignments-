import { test, expect, Page } from '@playwright/test'

test('Assignment: 1 Create a Lead CSS ', async ({ page }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator("//a[contains(text(),'CRM')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator('#createLeadForm_companyName').fill('Invendis')
    await page.locator('#createLeadForm_firstName').fill('Shruthi')
    await page.locator('#createLeadForm_lastName').fill('SM')
    await page.locator('#createLeadForm_personalTitle').fill('salutation')
    await page.locator('#createLeadForm_generalProfTitle').fill('title')
    await page.locator('#createLeadForm_annualRevenue').fill('12345')
    await page.locator('#createLeadForm_departmentName').fill('IT')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9985685685')
    await page.locator('.smallSubmit').click()
    console.log(await page.title())
})

async function login(page: Page) {
    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('#Login').click()

}


test('Assignment: 1 Create Lead  css or xpath', async ({ page }) => {

    await login(page)
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('[title="Manage your sales process with accounts, leads, opportunities, and more"]').click()
    await page.locator("//span[text()='Leads']").first().click()
    await page.locator('[title="New"]').nth(1).click()
    await page.locator('[aria-label="Salutation"]').first().click()
    await page.locator('[title="Dr."]').click()
    await page.locator('[name="lastName"]').fill('SM')
    await page.locator('//input[@name="Company"]').fill('Google')
    await page.locator('[name="SaveEdit"]').click()
    console.log(await page.locator('[slot="primaryField"]').textContent())
})

test('Assignment: 2 Edit Lead', async ({ page }) => {
    await login(page)
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()

    await expect(page.locator('[title="Manage your sales process with accounts, leads, opportunities, and more"]')).toBeVisible()

    await page.locator('[title="Manage your sales process with accounts, leads, opportunities, and more"]').click()

    await page.locator("//span[text()='Leads']").first().click()

    await page.locator('[name="Lead-search-input"]').fill('SM')
    await page.keyboard.press('Enter')

    await page.getByRole('button', { name: 'Show Actions' }).first().click()

    await page.getByRole('menuitem', { name: 'Edit', description: 'Edit', exact: true }).first().click()

    await page.locator('[name="firstName"]').fill('Shruthi')
    await page.locator(' [name="SaveEdit"]').click()
    await expect(page.locator("//span[text()='Shruthi SM']")).toBeVisible()
})

test('Assignment: 3 Create Individuals', async ({ page }) => {
    await login(page)
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator("//p[text()='Individuals']").click()
    await page.getByRole('button', { name: 'Individuals List' }).click()
    await page.locator("//span[text()='New Individual']").click()
    await page.locator('[placeholder="Last Name"]').fill('SM')
    await page.locator("//span[text()='Save']").click()
    await expect(page.locator("//span[text()='SM']").last()).toBeVisible()
})

test.only('Assignment: 4 Edit Individuals Test', async ({ page }) => {
    await login(page)
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator("//p[text()='Individuals']").click()
    await page.locator("//span[text()='Individuals']").first().click()
    await page.locator('[placeholder="Search this list..."]').fill('SM')
    await page.keyboard.press('Enter')
    await page.getByRole('button', { name: 'Show Actions' }).first().click()
    await page.getByRole('menuitem', { name: 'Edit', description: 'Edit', exact: true }).first().click()
    await page.locator('[class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]').click()
    await page.locator('[title="Mr."]').click()
    await page.locator('[placeholder="First Name"]').fill('SHRUTHI')
    await page.locator("//span[text()='Save']").click()
    await expect(page.locator("//span[text()='SHRUTHI SM']").first()).toBeVisible()
})