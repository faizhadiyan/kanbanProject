import React from 'react'
import { useRecoilValue } from 'recoil'
import { tasksState } from '../TaskAtoms'
import type { Task, CSSProperties } from '../../../types/index'

const TaskSummary = (): JSX.Element => {
  const tasks: Task[] = useRecoilValue(tasksState)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Summary of Your Tasks</h1>
      <div style={styles.list}>
        <h2>You have {tasks.length} tasks</h2>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '40px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  list: {
    color: '#fff',
    backgroundColor: '#55C89F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    width: '60%',
  },
}

export default TaskSummary
