import { selector } from 'recoil'
import { tasksState } from './TaskAtoms'
import type { Task } from '../../types'
import { SelectorKeys } from '../../constants/recoilKeys'

export const uncompletedTasksSelector = selector<Task[]>({
  // key: 'uncompleted_tasks', // Raw String
  key: SelectorKeys.UNCOMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder !== 4
    })
  },
})

export const notStartedTasksSelector = selector<Task[]>({
  // key: 'notstarted_tasks',
  key: SelectorKeys.NOT_STARTED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 1
    })
  },
})

export const inProgressTasksSelector = selector<Task[]>({
  key: SelectorKeys.IN_PROGRESS_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 2
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  key: SelectorKeys.WAITING_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 3
    })
  },
})

export const completedTasksSelector = selector<Task[]>({
  key: SelectorKeys.COMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 4
    })
  },
})

export const filteredTasksState = selector<Task[]>({
  key: 'filteredTasks',
  get: ({ get }) => {
    const tasks = get(tasksState)
    const showCompleted = get(showCompletedState)

    if (showCompleted) {
      return tasks
    } else {
      return tasks.filter((task) => task.progressOrder !== TASK_PROGRESS_ID.COMPLETED)
    }
  },
})

// notStartedTasksSelector,
//   inProgressTasksSelector,
//   waitingTasksSelector,
// 1 = "Not Started"
// 2 = "In Progress"
// 3 = "In Review / Waiting"
// 4 = "Completed"
