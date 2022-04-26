import style from './style.module.scss';

type NotificationType = {
  title: string
}

const Notification = ({ title }: NotificationType) => (
  <h1 className={style.notification}>
    {title}
  </h1>
);

export default Notification;
