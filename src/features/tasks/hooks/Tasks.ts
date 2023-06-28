import { useRecoilState } from 'recoil'
import { tasksState } from '../TaskAtoms'
import type { Task } from '../../../types'
import { TASK_PROGRESS_ID } from '../../../constants/app'

interface useTaskActionType {
  completeTask: (taskId: number) => void
  moveTaskCard: (taskId: number, directionNumber: 1 | -1) => void
  // Ditambahkan
  addTask: (title: string, detail: string, dueDate: string, progressOrder: number) => void
}

// Dalam hal ini, kita mendefinisikan hook bernama useTasksAction dan ini akan menghasilkan nilai return berupa function yang akan memanipulasi state dari task-task (yaitu: complete, add, delete, edit ...).

export const useTasksAction = (): useTaskActionType => {
  const [tasks, setTasks] = useRecoilState<Task[]>(tasksState)

  const completeTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task
    )
    setTasks(updatedTasks)
  }

  // const moveTaskCard = (taskId: number, directionNumber: 1 | -1): void => {
  //   const updatedTasks: Task[] = tasks.map((task) =>
  //     task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task
  //   )
  //   setTasks(updatedTasks)
  // }

  return {
    completeTask,
  }
}
