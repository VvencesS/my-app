import { NotificationManager } from "react-notifications";

export default ({
  type,
  msg = "",
  title = "",
  time = 3000,
  callback = () => {},
}) => {
  return () => {
      console.log('Notification handle');
    switch (type) {
      case "info":
        NotificationManager.info(msg, title, time, callback);
        break;
      case "success":
        NotificationManager.success(msg, title, time, callback);
        break;
      case "warning":
        NotificationManager.warning(msg, title, time, callback);
        break;
      case "error":
        NotificationManager.error(msg, title, time, callback);
        break;
    }
  };
};
