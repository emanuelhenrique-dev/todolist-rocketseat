import styles from './TaskList.module.css';

export const TaskList = () => {
  return (
    <div className={styles.TaskList}>
      <header className={styles.ListHeader}>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      <div className={styles.ListContent}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </div>
    </div>
  );
};
