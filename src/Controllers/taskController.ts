import { Model } from '../mvc/Models'
import { View } from './../mvc/View'
import { Controller } from './../mvc/Controller'

const taskModel = new Model()
const taskView = new View()

export const taskController = new Controller(taskModel,taskView)




