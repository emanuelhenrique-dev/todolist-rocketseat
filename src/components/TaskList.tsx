import { Task, TaskType } from './Task';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
}

export const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  const isEmpty: boolean = tasks.length < 1;

  function HandleCheckTask(id: string, value: boolean) {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: value };
      }
      return task;
    });

    setTasks(updateTask);
  }

  function deleteTask(taskId: string) {
    const tasksUpdate = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(tasksUpdate);
  }
  return (
    <div className={styles.TaskList}>
      <header className={styles.ListHeader}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>
            {tasks.reduce(
              (doneTasks, task) => (task.checked ? doneTasks + 1 : doneTasks),
              0
            )}
            {' de '}
            {tasks.length}
          </span>
        </div>
      </header>
      <div className={styles.ListContent}>
        {!isEmpty ? (
          tasks
            .toSorted((a, b) => Number(!b.checked) - Number(!a.checked))
            .map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  HandleCheckTask={HandleCheckTask}
                />
              );
            })
        ) : (
          <div className={styles.EmptyList}>
            <img src="./clipboard.png" alt="ícone de clipboard" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
