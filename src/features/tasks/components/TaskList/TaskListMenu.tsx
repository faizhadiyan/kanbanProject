import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { tasksState } from '../../TaskAtoms'
import TaskListItem from './TaskListItem'
import type { Task, CSSProperties } from '../../../../types'
import TaskModal from '../shared/TaskModal'
import { TASK_PROGRESS_ID, TASK_MODAL_TYPE } from '../../../../constants/app'
import type { Dispatch, SetStateAction } from 'react'

interface TaskListMenuProps {
  setIsFilterMenuOpen: Dispatch<SetStateAction<boolean>>
  taskX: number
}

const TaskListMenu = ({ setIsFilterMenuOpen, taskX }: TaskListMenuProps): JSX.Element => {
  const [showCompleted, setShowCompleted] = useState<boolean>(false)

  const tasks = useRecoilValue(tasksState)
  // const filteredTasks = showCompleted
  //   ? tasks
  //   : tasks.filter((task) => task.progressOrder !== TASK_PROGRESS_ID.COMPLETED)

  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks)

  // const handleCompleted = (): void => {
  //   if (showCompleted) {
  //     setFilteredTasks(tasks)
  //   } else {
  //     const filtered = tasks.filter((task) => task.progressOrder !== TASK_PROGRESS_ID.COMPLETED)
  //     setFilteredTasks(filtered)
  //   }
  // }

  const handleCompleted = (): void => {
    setShowCompleted(!showCompleted)
  }

  return (
    <div style={styles.menu}>
      <div
        style={styles.menuItem}
        onClick={(): void => {
          setShowCompleted(true)
          handleCompleted()
        }}
      >
        <span className="material-icons">check</span>
        Completed Tasks
      </div>
      <div
        style={styles.menuItem}
        onClick={(): void => {
          // deleteTasks()
        }}
      >
        <span className="material-icons">delete</span>Delete
      </div>
      <span
        className="material-icons"
        style={styles.closeIcon}
        onClick={(): void => {
          setIsFilterMenuOpen(false)
        }}
      >
        close
      </span>
    </div>
  )
}

const styles: CSSProperties = {
  menu: {
    backgroundColor: '#fff',
    border: '1px solid gray',
    padding: '8px 16px',
    position: 'absolute',
    top: '140px',
    right: '71.3%',
    zIndex: 10,
  },
  menuItem: {
    display: 'flex',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  closeIcon: {
    position: 'absolute',
    top: '0px',
    right: '4px',
    cursor: 'pointer',
  },
}

export default TaskListMenu
