const Notification = (props) => {
  const { className, imageUrl, text } = props;
  return (
    <div className={className}>
      <img src={imageUrl} className="image" />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="elements-container">
      <Notification
        className="blue"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Inforamtion Message"
      />
      <Notification
        className="green"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text=" Success Message"
      />

      <Notification
        className="orange"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning message"
      />

      <Notification
        className="red"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
