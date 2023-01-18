interface Spin { color: string, width: number, height: number }
type ICloseFn = () => void
type IOpenFn = (message?: string | null, delay?: number | null, spin?: Spin) => void

export type IUsePopSave = (props?: {
  id?: string,
  className?: string,
  animationRemove?: string,
  animationAdd?: string,
  animationDuration?: number
  backgroundColor?: string,
  color?: string
}) => { open: IOpenFn, close: ICloseFn }

export const usePopSave: IUsePopSave = props => {
  const options = {
    id: props?.id ? props.id : 'PopSavePortal',
    className: props?.className ? props.className : 'popSave',
    animationRemove: props?.animationRemove ? props.animationRemove : 'popSave-anim-out',
    animationAdd: props?.animationAdd ? props.animationAdd : 'popSave-anim-in',
    animationDuration: props?.animationDuration ? props.animationDuration : 300,
    backgroundColor: props?.backgroundColor ? props.backgroundColor : '#000',
    color: props?.color ? props.color : '#fff'
  }

  const getHTML = (message?: string | null, spin?: Spin): string => `
    <div
      class="portals-popsave-spinner"
      data-testid="PopSaveSpin"
      style="
        width:${spin ? String(spin.width) : '32'}px;
        height:${spin ? String(spin.height) : '32'}px;
      "
    >
      <div style="
        width:16px;height:16px;
        border:2px solid ${spin ? spin.color : '#FB923C'};
        border-color: ${spin ? spin.color : '#FB923C'}
        transparent transparent transparent"
      >
      </div>
      <div style="
        width:16px;
        height:16px;
        border:2px solid ${spin ? spin.color : '#FB923C'};
        border-color:${spin ? spin.color : '#FB923C'}
        transparent transparent transparent">
      </div>
      <div style="
        width:16px;
        height:16px;
        border:2px solid ${spin ? spin.color : '#FB923C'};
        border-color:${spin ? spin.color : '#FB923C'}
        transparent transparent transparent">
      </div>
      <div style="
        width:16px;
        height:16px;
        border:2px solid ${spin ? spin.color : '#FB923C'};
        border-color:${spin ? spin.color : '#FB923C'}
        transparent transparent transparent">
      </div>
    </div>
    <p><span>${message ?? 'Saving...Don&lsquo;t close!'}</span></p>
  `

  const close: ICloseFn = () => {
    const elem = document.getElementById(options.id)
    if (!elem) return
    elem.classList.remove(options.animationAdd)
    elem.classList.add(options.animationRemove)
    const removeEl = (): unknown => elem?.parentNode && elem?.parentNode.removeChild(elem)
    setTimeout(removeEl, options.animationDuration)
  }

  const open: IOpenFn = (message, delay, spin) => {
    const isAlreadyBuild = typeof document === 'object' && document.getElementById(options.id)
    if (typeof document === 'undefined' || isAlreadyBuild) return
    const div = document.createElement('div')
    div.classList.add(`${options.className}`)
    div.classList.add(`${options.animationAdd}`)
    div.style.backgroundColor = options.backgroundColor
    div.style.color = options.color
    if (options?.className) div.classList.add(options.className)
    div.setAttribute('id', options.id)
    div.setAttribute('data-testid', options.id)
    div.innerHTML = getHTML(message, spin)
    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  return { open, close }
}
