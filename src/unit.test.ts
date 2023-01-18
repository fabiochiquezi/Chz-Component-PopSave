import { screen } from '@testing-library/react'
import { usePopSave } from '.'

describe('usePortalPopSave', () => {
  const { open, close } = usePopSave()

  afterEach(() => {
    const Pop = document.getElementById('PopSavePortal')
    const parent = Pop?.parentNode
    if (parent) parent.removeChild(Pop)
  })

  test('open', () => {
    open()
    const pop = screen.getByTestId('PopSavePortal')
    const spin = screen.getByTestId('PopSaveSpin')
    expect(pop.textContent?.trim()).toBe('Saving...Don‘t close!')
    expect(spin).toHaveStyle('width: 32px; height: 32px;')
    const divsLoad = spin.querySelectorAll('div')
    divsLoad.forEach(div => {
      expect(div).toHaveStyle(`border: 2px solid #FB923C; border-color: #FB923C transparent
      transparent transparent`)
    })
  })

  test('open w/ message', () => {
    open('open')
    const pop = screen.getByTestId('PopSavePortal')
    expect(pop.textContent?.trim()).toBe('open')
  })

  test('open w/ spin', () => {
    open('open', null, { color: '#ddd', width: 10, height: 10 })
    const spin = screen.getByTestId('PopSaveSpin')
    expect(spin).toHaveStyle('width: 10px; height: 10px;')
    const divsLoad = spin.querySelectorAll('div')
    divsLoad.forEach(div => {
      expect(div).toHaveStyle(`border: 2px solid #ddd; border-color: #ddd transparent
      transparent transparent`)
    })
  })

  test('close', async () => {
    open()
    const pop = screen.getByTestId('PopSavePortal')
    expect(pop).toBeInTheDocument()
    close()
    // eslint-disable-next-line
    await new Promise((r) => setTimeout(r, 300))
    expect(pop).not.toBeInTheDocument()
    expect.assertions(2)
  })

  test('shoudnt add two times', () => {
    open()
    open()
    const Pop = screen.getAllByTestId('PopSavePortal')
    expect(Pop).toHaveLength(1)
  })
})
