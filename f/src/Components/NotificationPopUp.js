import React, { useState, useEffect } from 'react';
import './NotificationPopUp.css'; // Import CSS file for styling

const NotificationPopUp = () => {
  const [notifications, setNotifications] = useState([]);


   const handleAccept = () => {
     // Handle accept button logic here
     setNotifications(false);
   };

   const handleReject = () => {
     // Handle reject button logic here
     setNotifications(false);
};

  useEffect(() => {
    // Simulated API call to fetch notifications
    const fetchNotifications = () => {
      // Replace this with your actual API call to fetch notifications
      const mockNotifications = [
        { id: 1, title: 'Notification 1', content: 'Notification 1 content' },
        { id: 2, title: 'Notification 2', content: 'Notification 2 content' },
        { id: 3, title: 'Notification 3', content: 'Notification 3 content' }
      ];

      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id}>
            <div className='notification-popup'>
            <center><h3>Notification Title</h3></center>
            <div>
               <label>Name:&nbsp;&nbsp;</label>
               {/* <Input onChange={(e)=>handleInput(e)} name='name' value={user.name}/> */}
               </div>
               <div>
               <label>Email:&nbsp;&nbsp;</label>
               {/* <Input onChange={(e)=>handleInput(e)} name='name' value={user.name}/> */}
               </div>
             <div>
             <label>Blood Group:&nbsp;&nbsp;</label>
             {/* <Input onChange={(e)=>handleInput(e)} name='name' value={user.name}/> */}
             </div>
             <div>
             <label>Address:&nbsp;&nbsp;</label>
             {/* <Input onChange={(e)=>handleInput(e)} name='name' value={user.name}/> */}
             </div>
            {/* <h3>{notification.title}</h3>
            <p>{notification.content}</p> */}
            
            <div className="button-container">
        <button className="accept-button" onClick={() => handleAccept(notification)}>Accept</button>
          <button className="reject-button" onClick={() => handleReject(notification)}>Reject</button>
          </div>
            </div>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPopUp;
