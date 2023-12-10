import { exec } from 'node:child_process'
import * as fs from 'node:fs'
import * as readline from 'node:readline'

// ask for theme name
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('New theme name: ', (themeName) => {
  const newThemePath = `src/themes/${themeName}`

  // create new theme folder
  fs.mkdir(newThemePath, { recursive: true }, (err) => {
    if (err) throw err
  })

  // copy template files from src/gummybear to src/themes/themeName
  fs.cp(
    'src/utils/theme-template',
    `${newThemePath}`,
    { recursive: true },
    (err) => {
      if (err) throw err
    }
  )

  // run npm command to add a script for the new theme

  exec(
    `npm pkg set scripts.dev:${themeName}="cd src/themes/${themeName} && npx vite"`,
    (err, stdout) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(stdout)
    }
  )

  console.log(`New theme '${themeName}' created, happy theming !`)

  rl.close()
})
