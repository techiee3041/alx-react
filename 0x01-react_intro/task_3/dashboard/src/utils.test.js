import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('return the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear())
})

test('return the footer copy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
})

test('return the latest notification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
})