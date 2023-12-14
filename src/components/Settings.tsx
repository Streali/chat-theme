import React from 'react'

export function Settings() {
  return (
    <div className="settings">
      <label htmlFor="dark-mode" className="theme-toggle">
        <input
          type="checkbox"
          id="dark-mode"
          onChange={(event) =>
            window.dispatchEvent(
              new CustomEvent('dark-mode', { detail: event.target.checked })
            )
          }
        />
        Dark Mode
      </label>
    </div>
  )
}
