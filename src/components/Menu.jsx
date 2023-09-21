import * as icons from '../Icons/icons'

export function Menu () {
  return (
    <div className="menu-selector">
      {Object.entries(icons).map(([iconKey, icon]) => {
        return (
          <div
          key={iconKey}
          className="menu-option">
            <img
              className="menu-option"
              src={icon}
              alt={iconKey}
            />
          </div>
        )
      })}
    </div>
  )
}
