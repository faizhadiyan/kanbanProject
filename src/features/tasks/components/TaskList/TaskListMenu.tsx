// import React, { useState } from 'react'
// import { useRecoilValue } from 'recoil'
import { useSetRecoilState } from 'recoil'
import { tasksFilterState } from '../../TaskAtoms'
// import TaskListItem from './TaskListItem'
// import {
//   notStartedTasksSelector,
//   inProgressTasksSelector,
//   waitingTasksSelector,
//   completedTasksSelector,
// } from '../../TaskSelector'
import type { CSSProperties } from '../../../../types'
// import TaskModal from '../shared/TaskModal'
// import { TASK_PROGRESS_STATUS, TASK_PROGRESS_ID } from '../../../../constants/app'
// import type { Dispatch, SetStateAction } from 'react'
// import { useTasksAction } from '../../hooks/Tasks'

// interface TaskListMenuProps {
//   setIsFilterMenuOpen: Dispatch<SetStateAction<boolean>>
// }

const TaskListMenu = (): JSX.Element => {
  const setTaskFilter = useSetRecoilState(tasksFilterState)

  // const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector)
  // const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector)
  // const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector)
  // const completedTasks: Task[] = useRecoilValue(completedTasksSelector)

  // const tasks = useRecoilValue(tasksState)
  // let tasksToDisplay: Task[] = []

  // switch (filterType) {
  //   case 'completed':
  //     tasksToDisplay = completedTasks
  //     break
  //   case 'uncompleted':
  //     tasksToDisplay = [...notStartedTasks, ...inProgressTasks, ...waitingTasks, ...completedTasks]
  //     break
  //   default:
  //     tasksToDisplay = [...notStartedTasks, ...inProgressTasks, ...waitingTasks, ...completedTasks]
  //     break
  // }

  return (
    <div style={styles.menu} data-testid="filter-menu">
      <div style={styles.menuItem} onClick={() => setTaskFilter('completed')}>
        <span className="material-icons">check</span>
        Completed Tasks
      </div>
      <div style={styles.menuItem} onClick={() => setTaskFilter('uncompleted')}>
        <span className="material-icons">check</span>
        Uncompleted Tasks
      </div>
      <div style={styles.menuItem} onClick={() => setTaskFilter('all')}>
        <span className="material-icons">check</span>
        All Tasks
      </div>
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

//INI LUMAYAN BENER
// import React, { useState } from 'react'
// import { useRecoilValue } from 'recoil'
// import {
//   notStartedTasksSelector,
//   inProgressTasksSelector,
//   waitingTasksSelector,
//   completedTasksSelector,
// } from '../../TaskSelector'
// import TaskListItem from './TaskListItem'
// import type { Task, CSSProperties } from '../../../../types'

// interface TaskListMenuProps {
//   setIsFilterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
// }

// const TaskListMenu = ({ setIsFilterMenuOpen }: TaskListMenuProps): JSX.Element => {
//   const [filterType, setFilterType] = useState('all')

//   const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector)
//   const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector)
//   const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector)
//   const completedTasks: Task[] = useRecoilValue(completedTasksSelector)

//   let tasksToDisplay: Task[] = []

//   switch (filterType) {
//     case 'notStarted':
//       tasksToDisplay = notStartedTasks
//       break
//     case 'inProgress':
//       tasksToDisplay = inProgressTasks
//       break
//     case 'waiting':
//       tasksToDisplay = waitingTasks
//       break
//     case 'completed':
//       tasksToDisplay = completedTasks
//       break
//     default:
//       tasksToDisplay = [...notStartedTasks, ...inProgressTasks, ...waitingTasks, ...completedTasks]
//       break
//   }

//   return (
//     <div style={styles.menu}>
//       <div style={styles.menuItem} onClick={() => setFilterType('all')}>
//         <span className="material-icons">
//           {filterType === 'all' ? 'check_box' : 'check_box_outline_blank'}
//         </span>
//         All Tasks
//       </div>
//       <div style={styles.menuItem} onClick={() => setFilterType('notStarted')}>
//         <span className="material-icons">
//           {filterType === 'notStarted' ? 'check_box' : 'check_box_outline_blank'}
//         </span>
//         Not Started
//       </div>
//       <div style={styles.menuItem} onClick={() => setFilterType('inProgress')}>
//         <span className="material-icons">
//           {filterType === 'inProgress' ? 'check_box' : 'check_box_outline_blank'}
//         </span>
//         In Progress
//       </div>
//       <div style={styles.menuItem} onClick={() => setFilterType('waiting')}>
//         <span className="material-icons">
//           {filterType === 'waiting' ? 'check_box' : 'check_box_outline_blank'}
//         </span>
//         Waiting
//       </div>
//       <div style={styles.menuItem} onClick={() => setFilterType('completed')}>
//         <span className="material-icons">
//           {filterType === 'completed' ? 'check_box' : 'check_box_outline_blank'}
//         </span>
//         Completed
//       </div>
//       {/* Render the filtered tasks */}
//       {tasksToDisplay.map((task) => (
//         <TaskListItem key={task.id} task={task} />
//       ))}
//       <span
//         className="material-icons"
//         style={styles.closeIcon}
//         onClick={() => setIsFilterMenuOpen(false)}
//       >
//         close
//       </span>
//     </div>
//   )
// }

// const styles: CSSProperties = {
//   menu: {
//     backgroundColor: '#fff',
//     border: '1px solid gray',
//     padding: '8px 16px',
//     position: 'absolute',
//     top: '140px',
//     right: '71.3%',
//     zIndex: 10,
//   },
//   menuItem: {
//     display: 'flex',
//     marginBottom: '8px',
//     cursor: 'pointer',
//   },
//   closeIcon: {
//     position: 'absolute',
//     top: '0px',
//     right: '4px',
//     cursor: 'pointer',
//   },
// }

// export default TaskListMenu
