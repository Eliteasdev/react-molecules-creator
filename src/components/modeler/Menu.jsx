import { useEffect } from 'react'
import * as icons from '../../Icons/icons'
import { useKeyboard } from '../../hooks/useKeyboard'
import { useStore } from '../../hooks/useStore'

export function Menu () {
  const [option, setOption] = useStore(state => [state.option, state.setOption])

  const {
    cursor,
    sphere,
    connector,
    del
  } = useKeyboard()

  useEffect(() => {
    const options = {
      cursor,
      sphere,
      connector,
      del
    }

    const selectedOption = Object
      .entries(options)
      .find(([option, isEnabled]) => isEnabled)
    if (selectedOption) {
      const [optionName] = selectedOption
      setOption(optionName)
    }
  }, [cursor, sphere, connector, del])

  return (
    <div className="menu-selector">
      {Object.entries(icons).map(([iconKey, icon]) => {
        return (
          <div
          key={iconKey}
          className="menu-option">
            <img
              className={
                option === iconKey.replace('Icon', '') ? 'selected' : 'menu-option'
              }
              src={icon}
              alt={iconKey}
            />
          </div>
        )
      })}
    </div>
  )
}
