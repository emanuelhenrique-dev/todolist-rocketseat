import styles from './Task.module.css';
import { Check } from '@phosphor-icons/react';
import { TrashIcon } from '../assets/trash';

export interface TaskType {
  id: string;
  checked: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
  deleteTask: (taskId: string) => void;
  HandleCheckTask: (id: string, value: boolean) => void;
}

export const Task = ({ task, deleteTask, HandleCheckTask }: TaskProps) => {
  return (
    <div className={styles.Task} id={task.id}>
      <div>
        <div
          className={styles.CheckBox}
          onClick={() => HandleCheckTask(task.id, !task.checked)}
        >
          <input readOnly type="checkbox" checked={task.checked} />
          {task.checked && <Check size={9} color="#F2F2F2" weight="bold" />}
        </div>

        <p className={task.checked ? styles.CheckedText : ''}>{task.content}</p>
      </div>

      <div className={styles.DeleteIcon} onClick={() => deleteTask(task.id)}>
        <TrashIcon width={24} height={24} fill="#ff4d4f" />
      </div>
    </div>
  );
};
