import { createStore } from 'redux'

import TodosStore from './TodosStore'

const Store = createStore(TodosStore)

export default Store