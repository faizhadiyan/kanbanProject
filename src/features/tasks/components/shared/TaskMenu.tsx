import React, { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { CSSProperties, Task } from '../../../../types'
import TaskModal from '../shared/TaskModal' // Ditambahkan
import { TASK_PROGRESS_ID, TASK_MODAL_TYPE } from '../../../../constants/app'
import { useTasksAction } from '../../hooks/Tasks'

// import { useRecoilState } from 'recoil'
// import TaskColumn from '../TaskProgress/TaskColumn'
// import { tasksState } from '../../TaskAtoms'
// import TaskForm from './TaskForm'

interface TaskMenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  taskX: number
}

const TaskMenu = ({ setIsMenuOpen, taskX }: TaskMenuProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { readInitialValue } = useTasksAction()

  return (
    <div style={styles.menu}>
      <div
        style={styles.menuItem}
        onClick={(): void => {
          setIsModalOpen(true)
          readInitialValue(taskX) // Ditambahkan
        }}
      >
        <span className="material-icons">edit</span>
        Edit
      </div>
      <div style={styles.menuItem}>
        <span className="material-icons">delete</span>Delete
      </div>
      <span
        className="material-icons"
        style={styles.closeIcon}
        onClick={(): void => {
          setIsMenuOpen(false)
        }}
      >
        close
      </span>
      {isModalOpen && (
        <TaskModal
          headingTitle="Add your task"
          type={TASK_MODAL_TYPE.ADD} // Ditambahkan
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
          // initialTitle={initialTitle}
          // initialDetail={initialDetail}
          // initialDueDate={initialDueDate}
          // initialProgressOrder={initialProgressOrder}
        />
      )}
      {isModalOpen && (
        <TaskModal
          headingTitle="Edit your task"
          type={TASK_MODAL_TYPE.EDIT} // Ditambahkan
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
        />
      )}
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

export default TaskMenu
