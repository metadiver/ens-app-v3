import { ConsoleMessage, Page } from "@playwright/test"

type Dependencies = {
  page: Page
}

export const createConsoleListener = ({ page}: Dependencies) => {
  let messages: string[] = []
  let internalRegex: RegExp | null = null

  const filter = (msg: ConsoleMessage) => {
    const message = msg.text()
    if (internalRegex?.test(message)) messages.push(message)  
  } 

  return {
    initialize: ({ regex}: { regex: RegExp}) => {
      messages.length = 0
      internalRegex = regex
      page.on('console', filter)
    },
    reset: () => {
      messages.length = 0
      internalRegex = null
      page.off('console', filter)
    },
    print: () => console.log(messages),
    getMessages: () => messages
  }
}