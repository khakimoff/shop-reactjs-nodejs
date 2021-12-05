// Type
type NotificationType = {
    title: string
}

const Notification = ({ title }: NotificationType) => (
  <h1 className="Notification">
    {title}
  </h1>
);

export default Notification;
