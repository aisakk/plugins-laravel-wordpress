
const Modal = ({ children,isVisible, onClose }) => {
    return (
      <div
        style={{
          display: isVisible ? "block" : "none",
          position: "fixed",
          zIndex: 1,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "auto",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: "#fefefe",
            margin: "15% auto",
            padding: "20px",
            border: "1px solid #888",
            width: "80%",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span
            style={{
              color: "#aaaaaa",
              float: "right",
              fontSize: "28px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            &times;
          </span>
          <p>Contenido del modal</p>
          {children}
        </div>
      </div>
    );
  };

  export default Modal;
