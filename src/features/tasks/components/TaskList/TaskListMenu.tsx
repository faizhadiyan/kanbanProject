import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { tasksState } from '../../TaskAtoms'
import TaskListItem from './TaskListItem'
import type { Task, CSSProperties } from '../../../../types'
import TaskModal from '../shared/TaskModal'
import { TASK_PROGRESS_ID, TASK_MODAL_TYPE } from '../../../../constants/app'
import type { Dispatch, SetStateAction } from 'react'

// interface TaskListMenuProps {
//   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
//   taskX: number
// }

const TaskListMenu = (): JSX.Element => {
  const [showCompleted, setShowCompleted] = useState<boolean>(false)

  const tasks = useRecoilValue(tasksState)
  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => task.progressOrder !== TASK_PROGRESS_ID.COMPLETED)

  return (
    <div style={styles.menu}>
      <div style={styles.menuItem} onClick={() => setShowCompleted(!showCompleted)}>
        <span className="material-icons">
          {showCompleted ? 'check_box' : 'check_box_outline_blank'}
        </span>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </div>
      {filteredTasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  )
}

const styles: CSSProperties = {
  menu: {
    backgroundColor: '#fff',
    border: '1px solid gray',
    padding: '8px 16px',
    position: 'absolute',
    top: '-10px',
    right: '4%',
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
    right: '2px',
    cursor: 'pointer',
  },
}

export default TaskListMenu
