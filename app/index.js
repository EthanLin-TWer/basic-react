import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from './config/router'
import Raven from 'raven-js'

const sentry = {
   app: '111723',
   key: 'fb773fbcce3c4e85871beb26f117d606'
}
const sentryUrl = `https://${sentry.key}@sentry.io/${sentry.app}`

Raven.config(sentryUrl).install()
ReactDOM.render(Routes, document.getElementById('app'))